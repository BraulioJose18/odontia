import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../category/interfaces/category.interface";
import {Subcategory} from "../../interfaces/subcategory.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {SubcategoryService} from "../../services/subcategory.service";
import {CategoryService} from "../../../category/services/category.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../../components/create-category/create-category.component";

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.scss']
})
export class FormSubcategoryComponent implements OnInit {

  formSubcategory: FormGroup
  checked = true;
  disabled = false;
  listCategory: Category [] = [];
  subcategory: Subcategory ={
    name: '',
    status: true
  }
  @Input() isDialogSub: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  subcategoryService: SubcategoryService,
    private  categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
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
    console.log(this.isDialogSub)
  }
  getCategories() {
    this.categoryService.getCategory()
      .subscribe((categories =>{
        console.log(categories)
        this.listCategory = categories.results;
      }));
  }
  saveChanges(){
    const subcategory = this.formSubcategory.value;
    subcategory.status = true
    this.subcategoryService.addSubcategory(subcategory)
      .subscribe(resp => {
        if(this.isDialogSub) {
          this.envioInformacionDialog.emit(resp);
        }else {
          this.router.navigate(['admin/subcategory/list']);
        }
      });
  }
  openAddCategory(): void{
    const dialogRef = this.dialog.open(CreateCategoryComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        this.getCategories()
      }else {
      }
    });
  }
}
