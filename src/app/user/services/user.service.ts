import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.api + '/user/'
  constructor(
    private http: HttpClient
  ) {
  }
  getListUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getListProvider(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "?is_provider=true")
  }
  getListClient(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "?is_client=true")
  }
  getUserById(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+id)
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl,user)
  }
}
