import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSaleComponent } from './pages/list-sale/list-sale.component';
import { FormSaleComponent } from './pages/form-sale/form-sale.component';
import {SaleRoutingModule} from "./sale-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomeSaleComponent } from './pages/home-sale/home-sale.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AddProductSaleDetailComponent} from "./components/add-product-sale-detail/add-product-sale-detail.component";



@NgModule({
  declarations: [
    ListSaleComponent,
    FormSaleComponent,
    HomeSaleComponent,
    AddProductSaleDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SaleRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormSaleComponent,
  ],
  entryComponents: [
    AddProductSaleDetailComponent
  ]
})
export class SaleModule { }
