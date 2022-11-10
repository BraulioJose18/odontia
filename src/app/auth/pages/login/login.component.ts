import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  login(){
    const user = this.formLogin.value;
    this.authService.login(user).subscribe((res) => {
      console.log(res)
      if(res){
        console.log(res);
        const token = this.authService.currentUserValue.token;
        if(token){
          this.router.navigate(['admin/category/list']);
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

}
