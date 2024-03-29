import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/product/'
  constructor(
    private http: HttpClient
  ) {
  }
  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getProductsCustom(): Observable<any> {
    return this.http.get<any>(this.baseUrl+"products/custom")
  }
  getProductById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+id)
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl,product)
  }
}
