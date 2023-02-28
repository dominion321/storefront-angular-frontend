import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  quantity = 0;
  amount = 0;
  fullname = '';
  creditcard = 0;
  address = '';
  requiredForm: FormGroup;

  productsInCart: Product[] = [];
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private fb: FormBuilder
  ) {
    this.myForm();
    this.requiredForm = '' as unknown as FormGroup<any>;
  }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts();
    for (let product of this.productsInCart) {
      this.amount = [product.price * (product.quantity as number)].reduce(
        (a, b) => a + b
      );
    }
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.productsInCart = this.productsInCart.filter((p) => p != product);
    this.amount = 0;
    for(let product of this.productsInCart) {
      this.amount += (product.quantity * product.price)
    }
  }

  productTotal() {
    let allprice = [];
    for (let product of this.productsInCart) {
      allprice.push((product.quantity as number) * product.price);
    }
    this.amount = allprice.reduce((a, b) => a + b);
  }

  onSubmit() {
    let order: Order = {
      amount: this.amount,
      fullname: this.fullname,
    };
    this.orderService.addToOrder(order);
  }
}
