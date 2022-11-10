import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeRoleComponent} from "./pages/home-role/home-role.component";
import {ListRoleComponent} from "./pages/list-role/list-role.component";
import {FormRoleComponent} from "./pages/form-role/form-role.component";

const routes: Routes = [
  {
    path: '',
    component: HomeRoleComponent,
    children: [
      {
        path: 'list',
        component: ListRoleComponent
      },
      {
        path: 'add',
        component: FormRoleComponent
      },
      {
        path: 'edit/:id',
        component: FormRoleComponent
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
export class RoleRoutingModule { }
