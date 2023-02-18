import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;

  quantity = 0
  constructor(){
    this.product = {
      id : '1',
        name : '',
        price : 0,
        url : '',
        description : '',
    }
  }

}
