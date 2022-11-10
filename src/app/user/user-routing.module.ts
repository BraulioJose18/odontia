import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {FormUserComponent} from "./pages/form-user/form-user.component";
import {HomeUserComponent} from "./pages/home-user/home-user.component";

const routes: Routes = [
  {
    path: '',
    component: HomeUserComponent,
    children: [
      {
        path: 'list',
        component: ListUserComponent
      },
      {
        path: 'add',
        component: FormUserComponent
      },
      {
        path: 'edit/:id',
        component: FormUserComponent
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
export class UserRoutingModule { }
