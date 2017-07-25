import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import {CustomersComponent} from './customers.component';
import {CustomerService} from './customer.service';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomersComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    pathMatch: 'full',
    path: '',
    redirectTo: '/dashboard',
  }
])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
