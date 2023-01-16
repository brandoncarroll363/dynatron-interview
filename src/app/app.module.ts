import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from './services/customers.service';
import { MatTableModule } from '@angular/material/table';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteDialogCustomerComponent } from './delete-dialog-customer/delete-dialog-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    DeleteDialogCustomerComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule

  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
