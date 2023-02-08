import { Component, OnInit } from '@angular/core';
import {MeasurementUnitService} from "../../services/measurement.unit.service";
import {Router} from "@angular/router";
import {MeasurementUnit} from "../../interfaces/measurement.unit.interface";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-measurement-unit.component.html',
  styleUrls: ['./list-measurement-unit.component.scss']
})
export class ListMeasurementUnitComponent implements OnInit {

  measurementUnit: MeasurementUnit[] = [];
  displayedColumns: string[] = ['name', 'symbol','status', 'actions'];

  constructor(
    private categoryService: MeasurementUnitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getMeasurementUnit()
      .subscribe((measurementUnit =>{
        this.measurementUnit = measurementUnit.results
      }));
  }
  crearActualizar() {
    console.log("Prueba")
    this.router.navigate(['admin/measurementUnit/add']);
  }

}
