import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { FormProductComponent } from './pages/form-product/form-product.component';
import {MaterialModule} from "../material/material.module";
import { HomeProductComponent } from './pages/home-product/home-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";
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
    ListProductComponent,
    FormProductComponent,
    HomeProductComponent,
    CreateBrandComponent,
    CreateSubcategoryComponent,
    CreateMeasurementUnitComponent,
    ExpirationListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule,
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
export class ProductModule { }
