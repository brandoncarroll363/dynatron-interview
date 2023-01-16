import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private router: Router
  ) { 
    this.customerForm = this.fb.group({
      id : [0, Validators.required],
      firstName : [null, Validators.required],
      lastName : [null, Validators.required],
      email : [null, [
        Validators.required,
        Validators.email
      ]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.customersService.create(this.customerForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      })
  }

}
