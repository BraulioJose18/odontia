import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brand} from "../interfaces/Brand";
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
  getBrand(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getBrandById(id: string): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl+id)
  }
  addBrand(category: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl,category)
  }
}
