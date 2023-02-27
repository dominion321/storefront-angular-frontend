import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

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


  productsInCart: Product[] = [];
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts();
    for(let product of this.productsInCart){
      this.amount = [product.price * (product.quantity as number)].reduce((a,b) => a+b);
    }
  }

  removeFromCart(product: Product) {
    if (this.quantity === 0) {
      this.cartService.removeFromCart(product);
      this.productsInCart = this.productsInCart.filter((p) => p != product);
    }
  }

  productTotal() {
    let allprice = [];
    for(let product of this.productsInCart) {
      if(product.quantity === 0) {
        alert(`${product.name} has been removed.`);
        this.productsInCart = this.productsInCart.filter((p) => product.id !== p.id);
        return
      }
      allprice.push((product.quantity as number)* product.price)
    }
    this.amount = allprice.reduce((a,b) => a+b);
  }

  onSubmit() {
    let order: Order = {
      amount: this.amount,
      fullname: this.fullname,
    };
    this.orderService.addToOrder(order);
  }

}
