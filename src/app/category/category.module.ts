import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { FormCategoryComponent } from './pages/form-category/form-category.component';
import {CategoryRoutingModule} from "./category-routing.module";
import { HomeCategoryComponent } from './pages/home-category/home-category.component';
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    ListCategoryComponent,
    FormCategoryComponent,
    HomeCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
