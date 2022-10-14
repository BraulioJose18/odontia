import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBrandComponent } from './pages/list-measurement-unit/list-brand.component';
import { FormBrandComponent } from './pages/form-measurement-unit/form-brand.component';
import {MaterialModule} from "../material/material.module";
import { HomeBrandComponent } from './pages/home-measurement-unit/home-brand.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [
    ListBrandComponent,
    FormBrandComponent,
    HomeBrandComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
