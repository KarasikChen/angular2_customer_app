import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Customer} from './customer';

@Injectable()
export class CustomerSearchService {
  constructor(private http: Http) {}

  search(term:string): Observable<Customer[]> {
    return this.http.get(`api/customers/?name=${term}`)
      .map(res => res.json().data as Customer[])
      ;
  }
}
