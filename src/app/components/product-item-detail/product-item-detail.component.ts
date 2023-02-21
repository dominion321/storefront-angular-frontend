import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: '',
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {}
}
