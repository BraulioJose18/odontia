import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../interfaces/purchase.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl: string = environment.api + '/purchase_sale/'
  constructor(
    private http: HttpClient
  ) {
  }
  getPurchases(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "?movementType=1")
  }
  getPurchaseById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+id)
  }
  addPurchase(purchase: any): Observable<any> {
    return this.http.post<any>(this.baseUrl,purchase)
  }
}
