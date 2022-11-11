import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPurchaseComponent } from './pages/list-purchase/list-purchase.component';
import { FormPurchaseComponent } from './pages/form-purchase/form-purchase.component';
import {PurchaseRoutingModule} from "./purchase-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomePurchaseComponent } from './pages/home-purchase/home-purchase.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AddProductDetailComponent} from "./components/add-product-detail/add-product-detail.component";



@NgModule({
  declarations: [
    ListPurchaseComponent,
    FormPurchaseComponent,
    HomePurchaseComponent,
    AddProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PurchaseRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormPurchaseComponent,
  ],
  entryComponents: [
    AddProductDetailComponent
  ]
})
export class PurchaseModule { }
