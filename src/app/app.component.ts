import { Component, Inject } from '@angular/core';
import { ORDERS_PERMITIONS, OrdersPermition } from './test.constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourOfHeroes';
  mycolor = 'red';

  constructor(
    @Inject(OrdersPermition) private ordersPermition: any
  ) {

  }

  changeColor(color) {
    this.mycolor = color; 
  }
}
