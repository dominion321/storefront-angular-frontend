import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  product: Product[] = [];
  constructor() { }

  addToDetails(product: Product) {
    for(let _ of this.product) {
      if(_ === product){
        return;
      }
    }
    this.product.push(product);
  }

  showDetails(): Product[] {
    return this.product;
  }

  clearDetail(){
    this.product = [];
  }
}
