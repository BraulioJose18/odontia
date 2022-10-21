import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Brand} from "../../interfaces/Brand";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BrandService} from "../../services/brand.service";

@Component({
  selector: 'app-form-brand',
  templateUrl: './form-brand.component.html',
  styleUrls: ['./form-brand.component.scss']
})
export class FormBrandComponent implements OnInit {

  formCategory: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  category: Brand ={
    name: '',
    status: true
  }
  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

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
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/brand/list']);
        }

      });
  }

}
