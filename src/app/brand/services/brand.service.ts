import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/category.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/brand/'
  constructor(
    private http: HttpClient
  ) {
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }
  getCategoryById(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl+id)
  }
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl,category)
  }
}
