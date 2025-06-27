import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interface/products';
const apiURL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private http = inject(HttpClient)
  constructor() { }
  getAllProducts():Observable<Products>{
    return this.http.get<Products>(`${apiURL}/api/v1/products`)
  }
}
