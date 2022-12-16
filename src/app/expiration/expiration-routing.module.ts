import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListExpirationComponent} from "./pages/list-expiration/list-expiration.component";
import {FormExpirationComponent} from "./pages/form-expiration/form-expiration.component";
import {HomeExpirationComponent} from "./pages/home-expiration/home-expiration.component";

const routes: Routes = [
  {
    path: '',
    component: HomeExpirationComponent,
    children: [
      {
        path: 'list',
        component: ListExpirationComponent
      },
      {
        path: 'add',
        component: FormExpirationComponent
      },
      {
        path: 'edit/:id',
        component: FormExpirationComponent
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
export class ExpirationRoutingModule { }
