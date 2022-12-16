import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {SaleDetail} from "../../interfaces/sale.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SaleService} from "../../services/sale.service";
import {VoucherTypeService} from "../../../voucher_type/services/voucher-type.service";
import {VoucherType} from "../../../voucher_type/interfaces/voucher.type.interface";
import {UserService} from "../../../user/services/user.service";
import {User} from "../../../user/interfaces/user.interface";
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddProductSaleDetailComponent} from "../../components/add-product-sale-detail/add-product-sale-detail.component";
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.scss']
})
export class FormSaleComponent implements OnInit {

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

  listDetailPurchase: SaleDetail[] = [];
  displayedColumns: string[] = ['product', 'quantity', 'totalPrice', 'actions'];
  dataSource = [this.listDetailPurchase];

  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  saleService: SaleService,
    private voucherTypeService: VoucherTypeService,
    private userService: UserService,
    public dialog: MatDialog,
    public datepipe: DatePipe
  ) {
    this.form = this.formBuilder.group({
      voucherType: ['', Validators.required],
      user: ['', Validators.required],
      //date: ['', Validators.required],
      //totalPrice: [{value: '', disabled: true}, Validators.required],
      totalPrice: [''],
      providerAddress: [''],
      providerDocumentType: [''],
      providerDocumentNumber: [''],
    })
    this.form.controls['providerDocumentType'].disable();
    this.form.controls['providerDocumentNumber'].disable();
    this.form.controls['providerAddress'].disable();

  }
  @ViewChild(MatTable) table?: MatTable<SaleDetail>;
  ngOnInit(): void {
    console.log(this.isDialog);
    this.getVoucherTypes();
    this.getProviders();
  }
  saveChanges(){
    //console.log(this.form.value)
    let form = this.form.getRawValue();
    let detailProduct = this.listDetailPurchase.map(function(value) {
      return {
        product: value.product.id,
        quantity: value.quantity,
        totalPrice: value.totalPrice,
      }
    });
    const purchase = {
      totalPrice: form.totalPrice,
      detail: detailProduct,
      user: form.user.id,
      movementType: 2,
      voucherType: form.voucherType,
      date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    }
    this.saleService.addSale(purchase)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/sale/list']);
        }
      });
  }
  getVoucherTypes(){
    this.voucherTypeService.getListVoucherType().subscribe((res) =>{
      this.listVoucherType = res.results;
    })
  }
  getProviders(){
    this.userService.getListClient().subscribe((res) =>{
      this.listUser = res.results;
    })
  }
  selectProvider(user: any){
    console.log(user);
    this.form.get('providerFullName')?.setValue(user.name + " " + user.last_name);
    this.form.get('providerDocumentNumber')?.setValue(user.document_number);
    this.form.get('providerDocumentType')?.setValue(user.document_type == 1 ? "DNI" : "RUC");
    this.form.get('providerAddress')?.setValue(user.address);
  }
  openAddProduct() {
    const dialogRef = this.dialog.open(AddProductSaleDetailComponent, {
      width: '700px'
    });
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
  deleteProduct(product: any){
    let newDetail = this.listDetailPurchase.filter((item) => {
      return item.product != product.product
    })
    this.listDetailPurchase = newDetail;
    this.table?.renderRows();
    this.totalPrice = this.listDetailPurchase.reduce((acumulador, actual) => acumulador + actual.totalPrice, 0);
    this.form.get('totalPrice')?.setValue(this.totalPrice);
  }
}
