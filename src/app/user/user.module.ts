import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { FormUserComponent } from './pages/form-user/form-user.component';
import {UserRoutingModule} from "./user-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeUserComponent } from './pages/home-user/home-user.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListUserComponent,
    FormUserComponent,
    HomeUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormUserComponent,
  ]
})
export class UserModule { }
