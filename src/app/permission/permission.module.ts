import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPermissionComponent } from './pages/list-permission/list-permission.component';
import { FormPermissionComponent } from './pages/form-permission/form-permission.component';
import {PermissionRoutingModule} from "./permission-routing.module";
import {MaterialModule} from "../material/material.module";
import { HomePermissionComponent } from './pages/home-permission/home-permission.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListPermissionComponent,
    FormPermissionComponent,
    HomePermissionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PermissionRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormPermissionComponent,
  ]
})
export class PermissionModule { }
