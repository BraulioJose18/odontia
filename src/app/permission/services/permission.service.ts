import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Permission} from "../interfaces/permission.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private baseUrl: string = environment.api + '/permission/'
  constructor(
    private http: HttpClient
  ) {
  }
  getListPermission(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getPermissionById(id: string): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.baseUrl+id)
  }
  addPermission(voucherType: Permission): Observable<Permission> {
    return this.http.post<Permission>(this.baseUrl,voucherType)
  }
}
