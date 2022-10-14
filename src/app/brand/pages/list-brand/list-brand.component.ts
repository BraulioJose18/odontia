import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../services/brand.service";
import {Category} from "../../interfaces/category.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-measurement-unit',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(
    private categoryService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe((categories =>{
        this.categories = categories
      }));
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/brand/add']);
  }

}
