import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'add-customer',
    component : AddCustomerComponent
  },
  {
    path: 'edit-customer/:id',
    component : EditCustomerComponent
  },
  {
    path: '**',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
