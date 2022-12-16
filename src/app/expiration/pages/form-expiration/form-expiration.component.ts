import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Expiration} from "../../interfaces/Expiration";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ExpirationService} from "../../services/expiration.service";

@Component({
  selector: 'app-form-expiration',
  templateUrl: './form-expiration.component.html',
  styleUrls: ['./form-expiration.component.scss']
})
export class FormExpirationComponent implements OnInit {

  formCategory: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  category: Expiration ={
    name: '',
    status: true
  }
  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  categoryService: ExpirationService,
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
