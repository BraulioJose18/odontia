import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVoucherTypeComponent } from './pages/list-voucher-type/list-voucher-type.component';
import { FormVoucherTypeComponent } from './pages/form-voucher-type/form-voucher-type.component';
import {VoucherTypeRoutingModule} from "./voucher-type-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeVoucherTypeComponent } from './pages/home-voucher-type/home-voucher-type.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListVoucherTypeComponent,
    FormVoucherTypeComponent,
    HomeVoucherTypeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VoucherTypeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormVoucherTypeComponent,
  ]
})
export class VoucherTypeModule { }
