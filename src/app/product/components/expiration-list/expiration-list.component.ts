import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-expiration-list',
  templateUrl: './expiration-list.component.html',
  styleUrls: ['./expiration-list.component.scss']
})
export class ExpirationListComponent implements OnInit {

  response: object = {}
  idProduct: number = 0;
  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ExpirationListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.idProduct = this.data.id;
  }
  openSnackBar() {
    this.snackBar.open("Se creo correctamente la marca","Cerrar", {duration: 3000});
  }
  saveChanges(event: any){
    console.log(event)
    this.openSnackBar();
    this.dialogRef.close({data: event});
  }
}
