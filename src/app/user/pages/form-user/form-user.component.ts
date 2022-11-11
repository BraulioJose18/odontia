import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {User} from "../../interfaces/user.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  formVoucherType: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  user: User ={
    name: '',
    last_name: '',
    email: '',
    address:'',
    age: 20,
    born_date: new Date("2022-05-20"),
    cellphone: 999999999,
    document_type: 1,
    document_number: 5258744,
  }

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  voucherTypeService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formVoucherType = this.formBuilder.group({
      name: ['', Validators.required],
      serie: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.isDialog);
  }
  saveChanges(){
    const user = this.formVoucherType.value;
    user.status = true
    this.voucherTypeService.addUser(user)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/voucherType/list']);
        }
      });
  }

}
