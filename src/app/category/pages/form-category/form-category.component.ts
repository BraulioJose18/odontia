import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Category} from "../../interfaces/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

  formCategory: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  category: Category ={
    name: '',
    status: true
  }

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formCategory = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.isDialog);
  }
  saveChanges(){
    const category = this.formCategory.value;
    category.status = true
    this.categoryService.addCategory(category)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/category/list']);
        }
      });
  }

}
