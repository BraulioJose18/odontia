import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListSaleComponent} from "./pages/list-sale/list-sale.component";
import {FormSaleComponent} from "./pages/form-sale/form-sale.component";
import {HomeSaleComponent} from "./pages/home-sale/home-sale.component";

const routes: Routes = [
  {
    path: '',
    component: HomeSaleComponent,
    children: [
      {
        path: 'list',
        component: ListSaleComponent
      },
      {
        path: 'add',
        component: FormSaleComponent
      },
      {
        path: 'edit/:id',
        component: FormSaleComponent
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
export class SaleRoutingModule { }
