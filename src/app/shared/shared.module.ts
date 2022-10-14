import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";




@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
