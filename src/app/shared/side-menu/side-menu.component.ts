import { Component, OnInit } from '@angular/core';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import { faTeeth } from '@fortawesome/free-solid-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  clickDropDown: boolean = false;
  faRuler = faRuler;
  faTeeth = faTeeth;
  faTooth = faTooth;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  openDropDown(){
    this.clickDropDown = !this.clickDropDown
    console.log(this.clickDropDown);
  }
  logout(){
    this.authService.logout();
  }
}
