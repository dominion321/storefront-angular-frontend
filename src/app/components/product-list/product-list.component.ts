import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products: Product[] = [];
  constructor(private productListService:ProductListService) {
  }
  quantity = 0;
  

  increase(): void{
    this.quantity ++
  }

  reduce():void {
    this.quantity --
  }

  ngOnInit(): void {
    this.productListService.getData().subscribe(data => {
      for(let index = 0; index < data.length; index++) {
        const product: any = data[index];
        product["quantity"] = 0;
      }
      this.products = data;
    })
  }
}
