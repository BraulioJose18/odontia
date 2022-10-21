import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Brand} from "../../interfaces/Brand";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BrandService} from "../../services/brand.service";

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
  category: Brand ={
    name: '',
    status: true
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  categoryService: BrandService,
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
    const brand = this.formCategory.value;
    brand.status = true
    console.log(brand)
    this.categoryService.addBrand(brand)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        this.router.navigate(['admin/category/list']);
      });
  }

}
