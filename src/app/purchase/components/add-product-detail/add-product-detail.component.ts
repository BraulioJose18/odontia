import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from "../../../product/services/product.service";
import {Product} from "../../../product/interfaces/product.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './add-product-detail.component.html',
  styleUrls: ['./add-product-detail.component.scss']
})
export class AddProductDetailComponent implements OnInit {

  listProducts: Product[] = [];
  response: object = {};
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {
    this.form = this.formBuilder.group({
      product: ['', Validators.required],
      stock: ['', Validators.required],
      unitPrice: ['', Validators.required],
      totalPrice: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.form.controls['stock'].disable();
    this.form.controls['quantity'].disable();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.listProducts = res.results;
    })
  }
  updateProduct(product: any){
    this.form.get('stock')?.setValue(product.stock);
    this.form.get('unitPrice')?.setValue(product.purchasePrice);
    this.form.controls['quantity'].enable();
  }
  updateProductPrice(){
    const product = this.form.value;
    let totalPrice = product.quantity * product.unitPrice;
    this.form.get('totalPrice')?.setValue(totalPrice);
  }
  openSnackBar() {
    this.snackBar.open("Se agrego correctamente el producto","Cerrar", {duration: 3000});
  }
  saveChanges(){
    const detailProduct = this.form.value
    console.log(detailProduct);
    this.openSnackBar();
    this.dialogRef.close({data: detailProduct});
  }
}
