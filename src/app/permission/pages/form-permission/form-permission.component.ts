import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Permission} from "../../interfaces/permission.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PermissionService} from "../../services/permission.service";

@Component({
  selector: 'app-form-permission',
  templateUrl: './form-permission.component.html',
  styleUrls: ['./form-permission.component.scss']
})
export class FormPermissionComponent implements OnInit {

  formPermission: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  permission: Permission ={
    path: '',
    status: true
  }

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  permissionService: PermissionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formPermission = this.formBuilder.group({
      path: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.isDialog);
  }
  saveChanges(){
    const permission = this.formPermission.value;
    permission.status = true
    this.permissionService.addPermission(permission)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/permission/list']);
        }
      });
  }

}
