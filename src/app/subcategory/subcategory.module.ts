import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSubcategoryComponent } from './pages/list-subcategory/list-subcategory.component';
import { FormSubcategoryComponent } from './pages/form-subcategory/form-subcategory.component';
import { HomeSubcategoryComponent } from './pages/home-subcategory/home-subcategory.component';
import {SubcategoryRoutingModule} from "./subcategory-routing.module";



@NgModule({
  declarations: [
    ListSubcategoryComponent,
    FormSubcategoryComponent,
    HomeSubcategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule
  ]
})
export class SubcategoryModule { }
