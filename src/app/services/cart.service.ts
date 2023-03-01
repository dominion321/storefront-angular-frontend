import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.productsInCart;
  }

  addToCart(product: Product): Product[] | undefined {
    for (let _ of this.productsInCart) {
      if (_.id === product.id) {
        return;
      }
    }
    this.productsInCart.push(product);
    return this.productsInCart;
  }

  removeFromCart(product: Product): Product[] {
    this.productsInCart = this.productsInCart.filter((p) => p.id != product.id);
    return this.productsInCart;
  }

  clearCart(){
    this.productsInCart = [];
  }
}
