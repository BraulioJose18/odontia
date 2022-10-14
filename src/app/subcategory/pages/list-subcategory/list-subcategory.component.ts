import { Component, OnInit } from '@angular/core';
import {Subcategory} from "../../interfaces/subcategory.interface";
import {SubcategoryService} from "../../services/subcategory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.scss']
})
export class ListSubcategoryComponent implements OnInit {

  subcategories: Subcategory[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(
    private subcategoryService: SubcategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subcategoryService.getSubcategory()
      .subscribe((subcategories =>{
        this.subcategories = subcategories
      }));
  }
  crearActualizar() {
    this.router.navigate(['admin/subcategory/add']);
  }

}
