import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  quantity = 0;

  productsInCart: Product[] = [];
  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts();
  }

  removeFromCart(product: Product) {
    if (this.quantity === 0){
      this.cartService.removeFromCart(product);
      this.productsInCart = this.productsInCart.filter(p => p != product);
      console.log(this.productsInCart);
    }
  }
}
