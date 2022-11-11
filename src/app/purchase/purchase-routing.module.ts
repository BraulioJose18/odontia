import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListPurchaseComponent} from "./pages/list-purchase/list-purchase.component";
import {FormPurchaseComponent} from "./pages/form-purchase/form-purchase.component";
import {HomePurchaseComponent} from "./pages/home-purchase/home-purchase.component";

const routes: Routes = [
  {
    path: '',
    component: HomePurchaseComponent,
    children: [
      {
        path: 'list',
        component: ListPurchaseComponent
      },
      {
        path: 'add',
        component: FormPurchaseComponent
      },
      {
        path: 'edit/:id',
        component: FormPurchaseComponent
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
export class PurchaseRoutingModule { }
