import { Component, OnInit } from '@angular/core';
import {MeasurementUnitService} from "../../services/measurement.unit.service";
import {Router} from "@angular/router";
import {measurementUnit} from "../../interfaces/category.interface";

@Component({
  selector: 'app-list-measurement-unit',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  categories: measurementUnit[] = [];
  displayedColumns: string[] = ['name', 'symbol','status', 'actions'];

  constructor(
    private categoryService: MeasurementUnitService,
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
    this.router.navigate(['admin/measurementUnit/add']);
  }

}
