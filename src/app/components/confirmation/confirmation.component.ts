import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orders: Order[] = []
  

  constructor(private orderService:OrderService){   }

ngOnInit(): void {
  this.orders = this.orderService.getOrder();

  
}
}
