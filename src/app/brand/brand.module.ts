import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBrandComponent } from './pages/list-brand/list-brand.component';
import { FormBrandComponent } from './pages/form-brand/form-brand.component';
import {BrandRoutingModule} from "./brand-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeBrandComponent } from './pages/home-brand/home-brand.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListBrandComponent,
    FormBrandComponent,
    HomeBrandComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrandRoutingModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }
