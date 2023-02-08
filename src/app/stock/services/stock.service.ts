import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockRegularize} from "../interfaces/stock.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl: string = environment.api + '/product/expiration/all'
  constructor(
    private http: HttpClient
  ) {
  }
  getAllExpirationProduct(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  // addProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl,product)
  // }
}
