import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-subcategory',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  response: object = {}
  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }
  openSnackBar() {
    this.snackBar.open("Se creo correctamente la categoría","Cerrar", {duration: 3000});
  }
  saveChanges(event: any){
    console.log(event)
    this.openSnackBar();
    this.dialogRef.close({data: event});
  }
}
