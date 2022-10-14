import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListBrandComponent} from "./pages/list-measurement-unit/list-brand.component";
import {FormBrandComponent} from "./pages/form-measurement-unit/form-brand.component";
import {HomeBrandComponent} from "./pages/home-measurement-unit/home-brand.component";

const routes: Routes = [
  {
    path: '',
    component: HomeBrandComponent,
    children: [
      {
        path: 'list',
        component: ListBrandComponent
      },
      {
        path: 'add',
        component: FormBrandComponent
      },
      {
        path: 'edit/:id',
        component: FormBrandComponent
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
export class ProductRoutingModule { }
