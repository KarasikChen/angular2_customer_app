"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var customer_search_service_1 = require("./customer-search.service");
var CustomerSearchComponent = (function () {
    function CustomerSearchComponent(customerSearchService, router) {
        this.customerSearchService = customerSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    CustomerSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CustomerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customers = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.customerSearchService.search(term) : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CustomerSearchComponent.prototype.gotoDetail = function (customer) {
        var link = ['/detail', customer.id];
        this.router.navigate(link);
    };
    return CustomerSearchComponent;
}());
CustomerSearchComponent = __decorate([
    core_1.Component({
        selector: 'customer-search',
        templateUrl: './customer-search.component.html',
        styleUrls: ['./app.component.css'],
        providers: [customer_search_service_1.CustomerSearchService]
    }),
    __metadata("design:paramtypes", [customer_search_service_1.CustomerSearchService,
        router_1.Router])
], CustomerSearchComponent);
exports.CustomerSearchComponent = CustomerSearchComponent;
//# sourceMappingURL=customer-search.component.js.map