import {Component, OnInit} from '@angular/core';

import {Customer} from './customer';
import {CustomerService} from './customer.service';
import {CustomerSearchComponent} from './customer-search.component';

@Component ({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers()
    .then((response)=>this.customers=response.slice(1,5))
    ;
  }
}
