import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {AppMaterialModule} from "../app.material.module";
export const PagesRoutes: Routes = [
  {
    path: 'home',
    component: LoginComponent,
  },

];
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    LoginComponent
  ]
})


export class PagesModule {}
