import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { FormCategoryComponent } from './pages/form-category/form-category.component';
import {CategoryRoutingModule} from "./category-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeCategoryComponent } from './pages/home-category/home-category.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListCategoryComponent,
    FormCategoryComponent,
    HomeCategoryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
