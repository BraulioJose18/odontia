import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/category.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl: string = environment.api + '/category/'
  constructor(
    private http: HttpClient
  ) {
  }
  getCategory(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getCategoryById(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl+id)
  }
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl,category)
  }
}
