import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSubcategoryComponent } from './pages/list-subcategory/list-subcategory.component';
import { FormSubcategoryComponent } from './pages/form-subcategory/form-subcategory.component';
import { HomeSubcategoryComponent } from './pages/home-subcategory/home-subcategory.component';
import {SubcategoryRoutingModule} from "./subcategory-routing.module";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryModule} from "../category/category.module";
import { CreateCategoryComponent } from './components/create-category/create-category.component';



@NgModule({
  declarations: [
    ListSubcategoryComponent,
    FormSubcategoryComponent,
    HomeSubcategoryComponent,
    CreateCategoryComponent
  ],
    imports: [
        CommonModule,
        SubcategoryRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        CategoryModule
    ],
  exports: [
    FormSubcategoryComponent
  ],
  entryComponents: [
    CreateCategoryComponent
  ]
})
export class SubcategoryModule { }
