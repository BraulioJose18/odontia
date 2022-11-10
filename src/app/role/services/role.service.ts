import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../interfaces/role.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl: string = environment.api + '/role/'
  constructor(
    private http: HttpClient
  ) {
  }
  getListRole(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getRoleById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+id)
  }
  addRole(role: any): Observable<any> {
    return this.http.post<Role>(this.baseUrl,role)
  }
}
