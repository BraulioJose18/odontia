import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expiration} from "../interfaces/Expiration";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpirationService {
  private baseUrl: string = environment.api + '/expiration/'
  private baseUrl2: string = environment.api + '/product/expiration/custom/'
  constructor(
    private http: HttpClient
  ) {
  }
  getAllExpiration(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getAllExpirationByProduct(idProduct: number): Observable<any> {
    return this.http.get<any>(this.baseUrl+"?product="+idProduct)
  }
  getExpirationById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+id+"/")
  }
  addExpiration(expiration: any): Observable<any> {
    return this.http.post<any>(this.baseUrl,expiration)
  }
  addExpirationCustom(expiration: any): Observable<any> {
    return this.http.post<any>(this.baseUrl2,expiration)
  }
  updateExpirationDetailByProduct(expiration: any, idProduct: number): Observable<any> {
    return this.http.put<any>(this.baseUrl + idProduct + "/",expiration)
  }
}
