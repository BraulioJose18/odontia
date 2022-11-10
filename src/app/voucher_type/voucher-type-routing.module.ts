import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListVoucherTypeComponent} from "./pages/list-voucher-type/list-voucher-type.component";
import {FormVoucherTypeComponent} from "./pages/form-voucher-type/form-voucher-type.component";
import {HomeVoucherTypeComponent} from "./pages/home-voucher-type/home-voucher-type.component";

const routes: Routes = [
  {
    path: '',
    component: HomeVoucherTypeComponent,
    children: [
      {
        path: 'list',
        component: ListVoucherTypeComponent
      },
      {
        path: 'add',
        component: FormVoucherTypeComponent
      },
      {
        path: 'edit/:id',
        component: FormVoucherTypeComponent
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
export class VoucherTypeRoutingModule { }
