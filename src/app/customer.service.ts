import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {
  private customersUrl = 'api/customers';

  constructor(private http:Http) {}

  getCustomers(): Promise<Customer[]>{
    return this.http.get(this.customersUrl)
      .toPromise()
      .then((response)=>response.json().data as Customer[])
      .catch(this.handleError)
      ;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCustomer(id: number): Promise<Customer> {
    return this.getCustomers()
      .then(customers => customers.find(customer => customer.id === id));
  }

}
