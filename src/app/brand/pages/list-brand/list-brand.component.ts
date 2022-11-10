import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../interfaces/Brand";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  brands: Brand[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(
    private categoryService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getBrand()
      .subscribe((brands) =>{
        this.brands = brands.results
      });
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/brand/add']);
  }

}
