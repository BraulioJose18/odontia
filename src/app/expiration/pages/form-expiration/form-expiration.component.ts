import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MAT_DATE_LOCALE, ThemePalette, DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";
import {DetailCustomExpiration, Expiration} from "../../interfaces/Expiration";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ExpirationService} from "../../services/expiration.service";
import {PurchaseDetail} from "../../../purchase/interfaces/purchase.interface";
import {MatTable} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form-expiration',
  templateUrl: './form-expiration.component.html',
  styleUrls: ['./form-expiration.component.scss'],
})
export class FormExpirationComponent implements OnInit {

  formExpiration: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  category: Expiration ={
    dateExpiration: new Date("2022-12-04"),
    quantity: 1
  }

  listDetailExpiration: DetailCustomExpiration[] = [];
  displayedColumns: string[] = ['quantity', 'dateExpiration', 'actions'];
  dataSource = [this.listDetailExpiration];

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private  expirationService: ExpirationService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<FormExpirationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formExpiration = this.formBuilder.group({
      dateExpiration: ['', Validators.required],
      quantity: ['', Validators.required],
    })
  }
  @ViewChild(MatTable) table?: MatTable<PurchaseDetail>;
  ngOnInit(): void {
    console.log("dataaa", this.data)
  }
  openSnackBar() {
    this.snackBar.open("Se añadió correctamente la fecha de expiración","Cerrar", {duration: 3000});
  }
  saveChanges(){
    let detailExpiration = this.listDetailExpiration.map(function(value) {
      return {
        quantity: Number(value.quantity),
        dateExpiration: value.dateExpiration,
      }
    });
    let sendData = {
      product: this.data.idProduct,
      details: detailExpiration
    }
    // const brand = this.formExpiration.value;
    // brand.status = true
    // console.log(brand)
    this.expirationService.addExpirationCustom(sendData)
      .subscribe(resp => {
        this.openSnackBar();
        this.dialogRef.close({data: resp});
      });
  }
  addExpiration(){
    const expiration = this.formExpiration.value;
    console.log(expiration)
    this.listDetailExpiration.push(expiration);
    this.table?.renderRows();
    this.formExpiration.reset()

  }
  deleteExpiration(expiration: any){
    let newDetail = this.listDetailExpiration.filter((item) => {
      //return item.product != product.product
    })
    this.listDetailExpiration = newDetail;
    this.table?.renderRows();
  }

}
