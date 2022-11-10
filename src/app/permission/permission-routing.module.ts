import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListPermissionComponent} from "./pages/list-permission/list-permission.component";
import {FormPermissionComponent} from "./pages/form-permission/form-permission.component";
import {HomePermissionComponent} from "./pages/home-permission/home-permission.component";

const routes: Routes = [
  {
    path: '',
    component: HomePermissionComponent,
    children: [
      {
        path: 'list',
        component: ListPermissionComponent
      },
      {
        path: 'add',
        component: FormPermissionComponent
      },
      {
        path: 'edit/:id',
        component: FormPermissionComponent
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
export class PermissionRoutingModule { }
