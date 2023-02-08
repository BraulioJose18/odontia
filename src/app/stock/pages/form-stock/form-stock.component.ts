import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {StockRegularize} from "../../interfaces/stock.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
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
  selector: 'app-form-stock',
  templateUrl: './form-stock.component.html',
  styleUrls: ['./form-stock.component.scss']
})
export class FormStockComponent implements OnInit {

  formProduct: FormGroup
  //formProductExpiration: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  haveExpiration = false;
  listSubcategory: Subcategory [] = [];
  listBrand: Brand [] = [];
  listMeasurementUnit: MeasurementUnit [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  productService: StockService,
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
      minimumStock: ['', Validators.required],
      averageStock: ['', Validators.required],
      observation: ['', Validators.required],
      hasExpiration: [false, Validators.required],
      status: [true, Validators.required]
    })
    // this.formProductExpiration = this.formBuilder.group({
    //   dateExpiration: ['', Validators.required],
    //   quantity: ['', Validators.required]
    // })
  }

  ngOnInit(): void {
    this.getBrands();
    this.getSubCategories();
    this.getMeasurementUnit()
  }
  saveChanges(){
    console.log(this.formProduct.value);
    const product = this.formProduct.value;
    //product.status = true
    console.log(product)
    // this.productService.addProduct(product)
    //   .subscribe(resp => {
    //     console.log('Respuesta', resp);
    //     this.router.navigate(['admin/product/list']);
    //   });
  }
  openAddSubCategory(): void{
    const dialogRef = this.dialog.open(CreateSubcategoryComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        this.getSubCategories()
      }
    });
  }
  getSubCategories() {
    this.subcategoryService.getSubcategory()
      .subscribe((subcategories =>{
        this.listSubcategory = subcategories.results;
      }));
  }
  openAddBrand(): void{
    const dialogRef = this.dialog.open(CreateBrandComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        this.getBrands()
      }
    });
  }
  getBrands() {
    this.brandService.getBrand()
      .subscribe((brands =>{
        this.listBrand = brands.results;
      }));
  }
  openAddMeasurementUnit(): void{
    const dialogRef = this.dialog.open(CreateMeasurementUnitComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        this.getMeasurementUnit()
      }
    });
  }
  getMeasurementUnit() {
    this.measurementUnitService.getMeasurementUnit()
      .subscribe((measurementUnit =>{
        this.listMeasurementUnit = measurementUnit.results;
      }));
  }
  prueba(el: any){
    this.haveExpiration = el.checked;
  }

}
