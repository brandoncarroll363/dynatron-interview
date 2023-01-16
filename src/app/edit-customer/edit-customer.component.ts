import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm : FormGroup;
  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.customerForm = this.fb.group({
      id: [0],     
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      createdAt : [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: number){
    this.customersService.getById(id).subscribe((data) => {
      this.customerForm.setValue({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email : data.email,       
        createdAt: data.createdAt
      });
    })
  }

  onSubmit(){
    this.customersService.update(this.customerForm.value)
      .subscribe(()=> {
        this.router.navigate(['/']);
      });
  }

}
