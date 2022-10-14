import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/category.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://127.0.0.1:8000/api/category/')
  }
}
