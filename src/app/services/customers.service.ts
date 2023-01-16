import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  endpoint = "http://localhost:3000/customers";
  get() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.endpoint);
  }
  create(payload: Customer) {
    payload.createdAt = new Date();
    payload.updatedAt = new Date();
    return this.http.post<Customer>(this.endpoint, payload);
  }
  getById(id: number) {
    return this.http.get<Customer>(`${this.endpoint + '/' + id}`);
  }
  update(payload : Customer) {
    payload.updatedAt = new Date();
    return this.http.put<Customer>(
      `${this.endpoint + '/' + payload.id}`,
      payload
    );
  }
  delete(id: number) {
    return this.http.delete(`${this.endpoint + '/' + id}`);
  }
}
