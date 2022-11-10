import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VoucherType} from "../interfaces/voucher.type.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoucherTypeService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/vouchertype/'
  constructor(
    private http: HttpClient
  ) {
  }
  getListVoucherType(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getVoucherTypeById(id: string): Observable<VoucherType[]> {
    return this.http.get<VoucherType[]>(this.baseUrl+id)
  }
  addVoucherType(voucherType: VoucherType): Observable<VoucherType> {
    return this.http.post<VoucherType>(this.baseUrl,voucherType)
  }
}
