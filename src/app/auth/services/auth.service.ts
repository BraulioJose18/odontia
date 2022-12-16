import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, catchError, map, Observable, throwError} from "rxjs";
import {UserLogin, UserResponse} from "../../user/interfaces/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserResponse>;
  public currentUser: Observable<UserResponse>;
  private baseUrl: string = environment.api

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<UserResponse>(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserResponse {
    return this.currentUserSubject.value;
  }
  login(authData: UserLogin): Observable<any>{
    console.log(authData);
    console.log("Inicie Sesion");
    return this.http
      .post<any>(`${this.baseUrl}/auth/token/`, authData)
      .pipe(
        map( (res: any) => {
          let userData = this.getUserData(res.access);
          console.log(userData);
          let user =  new UserResponse();
          user.id = userData.user_id;
          user.token = res.access;
          user.refreshToken = res.refresh;
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(
          (err) => this.handlerError(err)
        )
      )
  }
  logout(){
    localStorage.removeItem('user');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login'])
  }
  private getUserData(accessToken: string) {
    return JSON.parse(atob(accessToken.split('.')[1]));
  }
  private handlerError(err:any): Observable<never> {
    let errorMessage = "Ocurrio un error con la información";
    if(err){
      errorMessage= "El usuario o contraseña son incorrectos";
    }
    return throwError(errorMessage);
  }
}
