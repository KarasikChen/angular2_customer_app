import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import {CustomersComponent} from './customers.component';
import {CustomerService} from './customer.service';
import {DashboardComponent} from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import {CustomerSearchComponent} from './customer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomersComponent,
    DashboardComponent,
    CustomerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
