import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expiration} from "../interfaces/Expiration";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpirationService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/brand/'
  constructor(
    private http: HttpClient
  ) {
  }
  getBrand(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getBrandById(id: string): Observable<Expiration[]> {
    return this.http.get<Expiration[]>(this.baseUrl+id)
  }
  addBrand(category: Expiration): Observable<Expiration> {
    return this.http.post<Expiration>(this.baseUrl,category)
  }
}
