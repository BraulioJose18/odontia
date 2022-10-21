import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMeasurementUnitComponent} from "./pages/list-measurement-unit/list-measurement-unit.component";
import {FormMeasurementUnitComponent} from "./pages/form-measurement-unit/form-measurement-unit.component";
import {HomeMeasurementUnitComponent} from "./pages/home-measurement-unit/home-measurement-unit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeMeasurementUnitComponent,
    children: [
      {
        path: 'list',
        component: ListMeasurementUnitComponent
      },
      {
        path: 'add',
        component: FormMeasurementUnitComponent
      },
      {
        path: 'edit/:id',
        component: FormMeasurementUnitComponent
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
export class MeasurementUnitRoutingModule { }
