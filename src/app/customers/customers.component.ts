import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';
import { MatDialog } from '@angular/material/dialog'
import { DeleteDialogCustomerComponent } from '../delete-dialog-customer/delete-dialog-customer.component';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersSource : Customer[] = [];
  entireDataSource : Customer[] = [];
  
  pageSizeOptions  = [5, 10, 20, 50];
  pageSize = 10;
  totalSize = 0;
  currentPage = 0;

  displayedColumns : string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt', 'actions'];
  
  constructor(
    private customersService: CustomersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.customersService.get().subscribe((data) => {
      this.entireDataSource = data;
      this.totalSize = data.length;
      this.iterator();
    })
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogCustomerComponent, {
      width: '250px',
      data : { id }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.customersSource = this.customersSource.filter(
          (_) => _.id !== id
        );
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.currentPage = e.pageIndex;
    this.iterator();
  }

  iterator(){
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.entireDataSource.slice(start, end);
    this.customersSource = part;
  }

}
