import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBrandComponent } from './pages/list-measurement-unit/list-brand.component';
import { FormBrandComponent } from './pages/form-measurement-unit/form-brand.component';
import {Measurement_unitRoutingModule} from "./measurement_unit-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeBrandComponent } from './pages/home-measurement-unit/home-brand.component';
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
    Measurement_unitRoutingModule,
    ReactiveFormsModule
  ]
})
export class Measurement_unitModule { }
