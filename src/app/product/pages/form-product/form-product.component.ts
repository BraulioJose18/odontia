import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Product} from "../../interfaces/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CreateCategoryComponent} from "../../../subcategory/components/create-category/create-category.component";
import {MatDialog} from "@angular/material/dialog";
import {SubcategoryService} from "../../../subcategory/services/subcategory.service";
import {Subcategory} from "../../../subcategory/interfaces/subcategory.interface";
import {Brand} from "../../../brand/interfaces/Brand";
import {MeasurementUnit} from "../../../measurement_unit/interfaces/measurement.unit.interface";
import {BrandService} from "../../../brand/services/brand.service";
import {MeasurementUnitService} from "../../../measurement_unit/services/measurement.unit.service";
import {CreateSubcategoryComponent} from "../../components/create-subcategory/create-subcategory.component";
import {CreateBrandComponent} from "../../components/create-brand/create-brand.component";
import {
  CreateMeasurementUnitComponent
} from "../../components/create-measurement-unit/create-measurement-unit.component";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-productcomponent.scss']
})
export class FormProductComponent implements OnInit {

  formProduct: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  listSubcategory: Subcategory [] = [];
  listBrand: Brand [] = [];
  listMeasurementUnit: MeasurementUnit [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  productService: ProductService,
    private  subcategoryService: SubcategoryService,
    private  brandService: BrandService,
    private  measurementUnitService: MeasurementUnitService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formProduct = this.formBuilder.group({
      name: ['', Validators.required],
      subcategory: ['', Validators.required],
      brand: ['', Validators.required],
      measurementUnit: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      specifications: ['', Validators.required],
      stock: ['', Validators.required],
      observation: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getBrands();
    this.getSubCategories();
    this.getMeasurementUnit()
  }
  saveChanges(){
    const product = this.formProduct.value;
    product.status = true
    console.log(product)
    this.productService.addProduct(product)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        this.router.navigate(['admin/product/list']);
      });
  }
  openAddSubCategory(): void{
    const dialogRef = this.dialog.open(CreateSubcategoryComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getSubCategories()
      }
    });
  }
  getSubCategories() {
    this.subcategoryService.getSubcategory()
      .subscribe((subcategories =>{
        console.log(subcategories)
        this.listSubcategory = subcategories
      }));
  }
  openAddBrand(): void{
    const dialogRef = this.dialog.open(CreateBrandComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getBrands()
      }
    });
  }
  getBrands() {
    this.brandService.getBrand()
      .subscribe((brands =>{
        console.log(brands)
        this.listBrand = brands
      }));
  }
  openAddMeasurementUnit(): void{
    const dialogRef = this.dialog.open(CreateMeasurementUnitComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getMeasurementUnit()
      }
    });
  }
  getMeasurementUnit() {
    this.measurementUnitService.getMeasurementUnit()
      .subscribe((measurementUnit =>{
        console.log(measurementUnit)
        this.listMeasurementUnit = measurementUnit
      }));
  }

}
