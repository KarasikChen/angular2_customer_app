import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService {
    private customersUrl = 'api/customers';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getCustomers(): Promise<Customer[]> {
        return this.http.get(this.customersUrl)
            .toPromise()
            .then((response) => response.json().data as Customer[])
            .catch(this.handleError)
            ;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getCustomer(id: number): Promise<Customer> {
        const url = `${this.customersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Customer)
            .catch(this.handleError);
    }

    update(customer: Customer): Promise<Customer> {
        const url = `${this.customersUrl}/${customer.id}`;
        return this.http
            .put(url, JSON.stringify(customer), { headers: this.headers })
            .toPromise()
            .then(() => customer)
            .catch(this.handleError);
    }

    create(name: string): Promise<Customer> {
        return this.http
            .post(this.customersUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Customer)
            .catch(this.handleError);
    }

    destroy(id:number): Promise<void> {
      const url = `${this.customersUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError)
        ;
    }

}
