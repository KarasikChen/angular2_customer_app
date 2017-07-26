import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Objectable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import {CustomerSearchService} from './customer-search.service';
import {Customer} from './customer';



@Component({
    selector: 'customer-search',
    templateUrl: './customer-search.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CustomerSearchService]
})

export class CustomerSearchComponent implements OnInit {
    customers: Observable<Customer[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private customerSearchService: CustomerSearchService,
        private router: Router
    ) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.customers = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.customerSearchService.search(term): Observable.of<Customer[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Customer[]>([]);
            })
            ;
    }

    gotoDetail(customer: Customer): void {
        let link = ['/detail', customer.id];
        this.router.navigate(link);
    }


}
