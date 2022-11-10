import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/user/'
  constructor(
    private http: HttpClient
  ) {
  }
  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
  getUserById(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+id)
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl,user)
  }
}
