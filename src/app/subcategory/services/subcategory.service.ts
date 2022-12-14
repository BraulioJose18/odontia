import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subcategory} from "../interfaces/subcategory.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/subcategory/'
  constructor(
    private http: HttpClient
  ) {
  }
  getSubcategory(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getSubcategoryById(id: string): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(this.baseUrl+id)
  }
  addSubcategory(subcategory: any): Observable<any> {
    return this.http.post<Subcategory>(this.baseUrl,subcategory)
  }
}
