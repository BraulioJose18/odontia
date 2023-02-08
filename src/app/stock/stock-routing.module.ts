import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListStockComponent} from "./pages/list-stock/list-stock.component";
import {FormStockComponent} from "./pages/form-stock/form-stock.component";
import {HomeStockComponent} from "./pages/home-stock/home-stock.component";

const routes: Routes = [
  {
    path: '',
    component: HomeStockComponent,
    children: [
      {
        path: 'list',
        component: ListStockComponent
      },
      {
        path: 'add',
        component: FormStockComponent
      },
      {
        path: 'edit/:id',
        component: FormStockComponent
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
export class StockRoutingModule { }
