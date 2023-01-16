import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogCustomerComponent } from './delete-dialog-customer.component';

describe('DeleteDialogCustomerComponent', () => {
  let component: DeleteDialogCustomerComponent;
  let fixture: ComponentFixture<DeleteDialogCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
