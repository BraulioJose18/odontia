import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStockComponent } from './pages/list-stock/list-stock.component';
import { FormStockComponent } from './pages/form-stock/form-stock.component';
import {MaterialModule} from "../material/material.module";
import { HomeStockComponent } from './pages/home-stock/home-stock.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StockRoutingModule} from "./stock-routing.module";
import {CreateBrandComponent} from "./components/create-brand/create-brand.component";
import {CreateSubcategoryComponent} from "./components/create-subcategory/create-subcategory.component";
import {CreateMeasurementUnitComponent} from "./components/create-measurement-unit/create-measurement-unit.component";
import {BrandModule} from "../brand/brand.module";
import {MeasurementUnitModule} from "../measurement_unit/measurement-unit.module";
import {SubcategoryModule} from "../subcategory/subcategory.module";
import {ExpirationListComponent} from "./components/expiration-list/expiration-list.component";
import {ExpirationModule} from "../expiration/expiration.module";

@NgModule({
  declarations: [
    ListStockComponent,
    FormStockComponent,
    HomeStockComponent,
    CreateBrandComponent,
    CreateSubcategoryComponent,
    CreateMeasurementUnitComponent,
    ExpirationListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StockRoutingModule,
    ReactiveFormsModule,
    BrandModule,
    MeasurementUnitModule,
    SubcategoryModule,
    ExpirationModule
  ],
  entryComponents: [
    CreateBrandComponent,
    CreateSubcategoryComponent,
    CreateMeasurementUnitComponent,
    ExpirationListComponent
  ]
})
export class StockModule { }
