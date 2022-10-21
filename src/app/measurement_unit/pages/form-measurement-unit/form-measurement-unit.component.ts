import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MeasurementUnit} from "../../interfaces/measurement.unit.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MeasurementUnitService} from "../../services/measurement.unit.service";

@Component({
  selector: 'app-form-measurement-unit',
  templateUrl: './form-measurement-unit.component.html',
  styleUrls: ['./form-measurement-unit.component.scss']
})
export class FormMeasurementUnitComponent implements OnInit {

  formCategory: FormGroup
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  categoryService: MeasurementUnitService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formCategory = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  saveChanges(){
    const measurementUnit = this.formCategory.value;
    measurementUnit.status = true
    console.log(measurementUnit)
    this.categoryService.addMeasurementUnit(measurementUnit)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        this.router.navigate(['admin/category/list']);
      });
  }

}
