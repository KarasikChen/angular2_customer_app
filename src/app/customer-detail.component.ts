import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { CustomerService } from './customer.service';
import { Customer } from './customer';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'customer-detail',
    templateUrl: './customer-detail.component.html',
})



export class CustomerDetailComponent implements OnInit {
    @Input() customer: Customer;
    constructor(
        private customerService: CustomerService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.customerService.getCustomer(+params.get('id')))
            .subscribe(customer => this.customer = customer);

    }
    goBack(): void {
        this.location.back();
    }

    save(): void {
      this.customerService.update(this.customer)
        .then(() => this.goBack());
    }

    
}
