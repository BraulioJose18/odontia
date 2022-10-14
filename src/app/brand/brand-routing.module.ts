import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListBrandComponent} from "./pages/list-brand/list-brand.component";
import {FormBrandComponent} from "./pages/form-brand/form-brand.component";
import {HomeBrandComponent} from "./pages/home-brand/home-brand.component";

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
export class BrandRoutingModule { }
