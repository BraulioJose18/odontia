import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {measurementUnit} from "../../interfaces/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MeasurementUnitService} from "../../services/measurement.unit.service";

@Component({
  selector: 'app-form-measurement-unit',
  templateUrl: './form-brand.component.html',
  styleUrls: ['./form-brand.component.scss']
})
export class FormBrandComponent implements OnInit {

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
    const category = this.formCategory.value;
    category.status = true
    console.log(category)
    this.categoryService.addCategory(category)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        this.router.navigate(['admin/category/list']);
      });
  }

}
