import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {VoucherType} from "../../interfaces/voucher.type.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VoucherTypeService} from "../../services/voucher-type.service";

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-voucher-type.component.html',
  styleUrls: ['./form-voucher-type.component.scss']
})
export class FormVoucherTypeComponent implements OnInit {

  formVoucherType: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  voucherType: VoucherType ={
    name: '',
    serie: '',
    status: true
  }

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  voucherTypeService: VoucherTypeService,
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
    const voucherType = this.formVoucherType.value;
    voucherType.status = true
    this.voucherTypeService.addVoucherType(voucherType)
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
