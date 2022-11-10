import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../category/interfaces/category.interface";
import {Subcategory} from "../../interfaces/role.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../services/role.service";
import {CategoryService} from "../../../category/services/category.service";
import {MatDialog} from "@angular/material/dialog";
import {CreatePermissionComponent} from "../../components/create-permission/create-permission.component";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss']
})
export class FormRoleComponent implements OnInit {

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
    private  subcategoryService: RoleService,
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
        if(this.isDialogSub) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/subcategory/list']);
        }
      });
  }
  openAddCategory(): void{
    const dialogRef = this.dialog.open(CreatePermissionComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getCategories()
      }else {
        console.log("Gaaa");
      }
    });
  }
}
