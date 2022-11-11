import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoleComponent } from './pages/list-role/list-role.component';
import { FormRoleComponent } from './pages/form-role/form-role.component';
import { HomeRoleComponent } from './pages/home-role/home-role.component';
import {RoleRoutingModule} from "./role-routing.module";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryModule} from "../category/category.module";
import { CreatePermissionComponent } from './components/create-permission/create-permission.component';
import {PermissionModule} from "../permission/permission.module";



@NgModule({
  declarations: [
    ListRoleComponent,
    FormRoleComponent,
    HomeRoleComponent,
    CreatePermissionComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PermissionModule
  ],
  exports: [
    FormRoleComponent
  ],
  entryComponents: [
    CreatePermissionComponent
  ]
})
export class RoleModule { }
