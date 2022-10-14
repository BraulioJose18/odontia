import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCategoryComponent} from "./pages/list-category/list-category.component";
import {FormCategoryComponent} from "./pages/form-category/form-category.component";
import {HomeCategoryComponent} from "./pages/home-category/home-category.component";

const routes: Routes = [
  {
    path: '',
    component: HomeCategoryComponent,
    children: [
      {
        path: 'list',
        component: ListCategoryComponent
      },
      {
        path: 'add',
        component: FormCategoryComponent
      },
      {
        path: 'edit/:id',
        component: FormCategoryComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }
