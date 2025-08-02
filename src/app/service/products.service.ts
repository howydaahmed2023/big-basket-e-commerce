import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { allProducts, Brand, Categories, Category, Product } from '../interface/products';
const apiURL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${apiURL}/api/v1/products`);
  }
  getProducts():Observable<allProducts>{
    return this.http.get<allProducts>('https://api.escuelajs.co/api/v1/products')
  }
  getAllBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>(`${apiURL}/api/v1/brands`)
  }
  getAllCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>("https://api.escuelajs.co/api/v1/categories")
  }
  getProductById(id:number){
    return this.http.get( `https://api.escuelajs.co/api/v1/products/${id}`)
  }
  getProductByCat(id:number){
    return this.http.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
  }
}
