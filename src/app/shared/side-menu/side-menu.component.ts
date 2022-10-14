import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  clickDropDown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openDropDown(){
    this.clickDropDown = !this.clickDropDown
    console.log(this.clickDropDown);
  }
}
