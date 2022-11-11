import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Purchase, PurchaseDetail} from "../../interfaces/purchase.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PurchaseService} from "../../services/purchase.service";
import {VoucherTypeService} from "../../../voucher_type/services/voucher-type.service";
import {VoucherType} from "../../../voucher_type/interfaces/voucher.type.interface";
import {UserService} from "../../../user/services/user.service";
import {User} from "../../../user/interfaces/user.interface";
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddProductDetailComponent} from "../../components/add-product-detail/add-product-detail.component";
@Component({
  selector: 'app-form-purchase',
  templateUrl: './form-purchase.component.html',
  styleUrls: ['./form-purchase.component.scss']
})
export class FormPurchaseComponent implements OnInit {

  form: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  disabledFields = true;
  totalPrice = 0;
  // user: User ={
  //   name: '',
  //   last_name: '',
  //   email: '',
  //   address:'',
  //   age: 20,
  //   born_date: new Date("2022-05-20"),
  //   cellphone: 999999999,
  //   document_type: 1,
  //   document_number: 5258744,
  // }
  listVoucherType: VoucherType[] = [];
  listUser: User[] = [];

  listDetailPurchase: PurchaseDetail[] = [];
  displayedColumns: string[] = ['product', 'quantity', 'totalPrice', 'actions'];
  dataSource = [this.listDetailPurchase];

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  purchaseService: PurchaseService,
    private voucherTypeService: VoucherTypeService,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      voucherType: ['', Validators.required],
      user: ['', Validators.required],
      totalPrice: ['', Validators.required],
      providerFullName: ['', Validators.required],
      providerAddress: ['', Validators.required],
    })
    this.form.controls['totalPrice'].disable();
    this.form.controls['providerFullName'].disable();
    this.form.controls['providerAddress'].disable();

  }
  @ViewChild(MatTable) table?: MatTable<PurchaseDetail>;
  ngOnInit(): void {
    console.log(this.isDialog);
    this.getVoucherTypes();
    this.getProviders();
  }
  saveChanges(){
    const purchase = this.form.value;
    this.purchaseService.addUser(purchase)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/purchase/list']);
        }
      });
  }
  getVoucherTypes(){
    this.voucherTypeService.getListVoucherType().subscribe((res) =>{
      this.listVoucherType = res.results;
    })
  }
  getProviders(){
    this.userService.getListUser().subscribe((res) =>{
      this.listUser = res.results;
    })
  }
  selectProvider(user: any){
    this.form.get('providerFullName')?.setValue(user.name + " " + user.last_name);
    this.form.get('providerAddress')?.setValue(user.address);
  }
  openAddProduct() {
    const dialogRef = this.dialog.open(AddProductDetailComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      if(res.data) {
        let detailProduct = res.data;
        this.listDetailPurchase.push(detailProduct);
        this.table?.renderRows();
        this.totalPrice = this.listDetailPurchase.reduce((acumulador, actual) => acumulador + actual.totalPrice, 0);
        this.form.get('totalPrice')?.setValue(this.totalPrice);
      }
    });
  }
}
