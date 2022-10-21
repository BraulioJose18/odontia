import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {Category} from "../../../category/interfaces/category.interface";
import {Subcategory} from "../../interfaces/subcategory.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {SubcategoryService} from "../../services/subcategory.service";
import {CategoryService} from "../../../category/services/category.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.scss']
})
export class FormSubcategoryComponent implements OnInit {

  formSubcategory: FormGroup
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  listCategory: Category [] = [];
  subcategory: Subcategory ={
    name: '',
    status: true
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  subcategoryService: SubcategoryService,
    private  categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formSubcategory = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(console.log)
    this.getCategories()
  }
  getCategories() {
    this.categoryService.getCategory()
      .subscribe((categories =>{
        console.log(categories)
        this.listCategory = categories
      }));
  }
  saveChanges(){
    const subcategory = this.formSubcategory.value;
    subcategory.status = true
    console.log(subcategory)
    this.subcategoryService.addSubcategory(subcategory)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        this.router.navigate(['admin/subcategory/list']);
      });
  }
}
