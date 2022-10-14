import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../interfaces/category.interface";

@Component({
  selector: 'app-list-measurement-unit',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  categories: Product[] = [];
  displayedColumns: string[] = ['name','salePrice', 'purchasePrice', 'specifications', 'observation','stock','status', 'actions'];

  constructor(
    private categoryService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe((categories =>{
        console.log(categories)
        this.categories = categories
      }));
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/product/add']);
  }

}
