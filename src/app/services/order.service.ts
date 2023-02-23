import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [];

  constructor() { }

  addToOrder(order: Order) {
    this.order = [];
    this.order.push(order);

  }

  getOrder(){
    return this.order;
  }
}
