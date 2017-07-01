import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Customer List';
  customer: Customer = {
    id: 1,
    name: 'Zhu'
  };

}

export class Customer {
  id: number;
  name: string;
}
