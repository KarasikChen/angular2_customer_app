import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'customer-detail',
  template:`
  <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    `
})



export class CustomerDetailComponent {
  @Input() customer: Customer;
}
