import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";




@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule

  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
