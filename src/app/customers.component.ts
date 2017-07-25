import { Component } from '@angular/core';
import { Customer } from './customer';
import {CustomerDetailComponent} from './customer-detail.component';
import { CUSTOMERS } from './mock-customers';
import {CustomerService} from './customer.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'my-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./app.component.css'],

})

export class CustomersComponent implements OnInit {
    customers: Customer[];
    selectedCustomer: Customer;
    onSelect(customer: Customer): void {
        this.selectedCustomer = customer;
    }
    constructor(private customerService: CustomerService,
                private router: Router
              ) {}

    getCustomers(): void {
      this.customerService.getCustomers()
      .then((response)=>this.customers = response)
      ;
    }
    ngOnInit() : void {
        this.getCustomers();
      }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedCustomer.id]);
    }
    }
