import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/category.interface";
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
  getCategory(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  getCategoryById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+id)
  }
  addCategory(category: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl,category)
  }
}
