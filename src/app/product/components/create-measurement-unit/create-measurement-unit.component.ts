import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-measurement-unit',
  templateUrl: './create-measurement-unit.component.html',
  styleUrls: ['./create-measurement-unit.component.scss']
})
export class CreateMeasurementUnitComponent implements OnInit {

  response: object = {}
  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateMeasurementUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }
  openSnackBar() {
    this.snackBar.open("Se creo correctamente la unidad","Cerrar", {duration: 3000});
  }
  saveChanges(event: any){
    console.log(event)
    this.openSnackBar();
    this.dialogRef.close({data: event});
  }
}
