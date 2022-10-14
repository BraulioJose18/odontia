import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-measurement-unit',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(
    private categoryService: CategoryService,
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
    this.router.navigate(['admin/category/add']);
  }

}
