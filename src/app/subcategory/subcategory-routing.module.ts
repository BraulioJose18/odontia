import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeSubcategoryComponent} from "./pages/home-subcategory/home-subcategory.component";
import {ListSubcategoryComponent} from "./pages/list-subcategory/list-subcategory.component";
import {FormSubcategoryComponent} from "./pages/form-subcategory/form-subcategory.component";

const routes: Routes = [
  {
    path: '',
    component: HomeSubcategoryComponent,
    children: [
      {
        path: 'list',
        component: ListSubcategoryComponent
      },
      {
        path: 'add',
        component: FormSubcategoryComponent
      },
      {
        path: 'edit/:id',
        component: FormSubcategoryComponent
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
export class SubcategoryRoutingModule { }
