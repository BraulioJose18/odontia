import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {FormProductComponent} from "./pages/form-product/form-product.component";
import {HomeProductComponent} from "./pages/home-product/home-product.component";

const routes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
    children: [
      {
        path: 'list',
        component: ListProductComponent
      },
      {
        path: 'add',
        component: FormProductComponent
      },
      {
        path: 'edit/:id',
        component: FormProductComponent
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
