import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/products';
const apiURL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(`${apiURL}/api/v1/products`);
  }
}