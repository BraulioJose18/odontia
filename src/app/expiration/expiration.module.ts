import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExpirationComponent } from './pages/list-expiration/list-expiration.component';
import { FormExpirationComponent } from './pages/form-expiration/form-expiration.component';
import {ExpirationRoutingModule} from "./expiration-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeExpirationComponent } from './pages/home-expiration/home-expiration.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListExpirationComponent,
    FormExpirationComponent,
    HomeExpirationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExpirationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListExpirationComponent
  ]
})
export class ExpirationModule { }
