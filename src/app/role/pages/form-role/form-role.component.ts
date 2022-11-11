import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../category/interfaces/category.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../services/role.service";
import {MatDialog} from "@angular/material/dialog";
import {CreatePermissionComponent} from "../../components/create-permission/create-permission.component";
import {MatSnackBar} from '@angular/material/snack-bar';
import {PermissionService} from "../../../permission/services/permission.service";
import {Permission} from "../../../permission/interfaces/permission.interface";

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss']
})
export class FormRoleComponent implements OnInit {

  formRole: FormGroup
  checked = true;
  disabled = false;
  listPermission: Permission [] = [];
  @Input() isDialogSub: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roleService: RoleService,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.formRole = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(console.log)
    this.getPermissions()
    console.log(this.isDialogSub)
  }
  getPermissions() {
    this.permissionService.getListPermission()
      .subscribe((permissions) =>{
        this.listPermission = permissions.results
      });
  }
  saveChanges(){
    const role = this.formRole.value;
    role.status = true
    console.log(role)
    this.roleService.addRole(role)
      .subscribe((resp) => {
        console.log('Respuesta', resp);
        if(this.isDialogSub) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/role/list']);
        }
      });
  }
  openAddRole(): void{
    const dialogRef = this.dialog.open(CreatePermissionComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        console.log(res);
        this.getPermissions()
      }else {
        console.log("Gaaa");
      }
    });
  }
}
