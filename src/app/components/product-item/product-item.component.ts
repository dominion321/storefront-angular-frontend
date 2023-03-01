import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductItemService } from 'src/app/services/product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() productEmitted = new EventEmitter<number>();

  productDetail: Product[] = [];
  details: Product[] = [];

  constructor(
    private cartService: CartService,
    private productItemService: ProductItemService
  ) {
    this.product = {
      id: '1',
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }

  addToDetails(product: Product): void {
    this.productItemService.addToDetails(product);
  }
}
