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
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  creditRegex = /^\d+$/
  quantity = 0;
  amount = 0;
  submitted = false;

  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    creditcard: new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern(this.creditRegex)])
  })

  productsInCart: Product[] = [];
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router
  ) {  }

  // myForm() {
  //   this.registerForm = this.fb.group({
  //     fullname: ,
  //   });
  // }

  ngOnInit(): void {
    // this.myForm();
    this.productsInCart = this.cartService.getProducts();
    this.productTotal();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.productsInCart = this.productsInCart.filter((p) => p != product);
    this.productTotal();
  }

  productTotal() {
    this.amount = 0;
    for (let product of this.productsInCart) {
      if (product.quantity >= 0) {
        this.amount += product.quantity * product.price;
      }
    }
  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    if(this.registerForm.invalid) {
      return;
    }
    let order: Order = {
      amount: this.amount,
      fullname: this.registerForm.value.fullname as string
    };
    this.orderService.addToOrder(order);

    this.router.navigate(['/confirmation']);
  }
}
