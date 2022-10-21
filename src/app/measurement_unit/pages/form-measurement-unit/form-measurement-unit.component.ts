import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MeasurementUnit} from "../../interfaces/measurement.unit.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MeasurementUnitService} from "../../services/measurement.unit.service";

@Component({
  selector: 'app-form-measurement-unit',
  templateUrl: './form-measurement-unit.component.html',
  styleUrls: ['./form-measurement-unit.component.scss']
})
export class FormMeasurementUnitComponent implements OnInit {

  formCategory: FormGroup
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  @Input() isDialog: boolean = false;
  @Output() envioInformacionDialog = new EventEmitter<Object>();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private  measurementUnitService: MeasurementUnitService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formCategory = this.formBuilder.group({
      name: ['', Validators.required],
      symbol: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  saveChanges(){
    const measurementUnit = this.formCategory.value;
    measurementUnit.status = true
    console.log(measurementUnit)
    this.measurementUnitService.addMeasurementUnit(measurementUnit)
      .subscribe(resp => {
        console.log('Respuesta', resp);
        if(this.isDialog) {
          console.log("Es dialogo")
          this.envioInformacionDialog.emit(resp);
        }else {
          console.log("Es ventana normal")
          this.router.navigate(['admin/measurementUnit/list']);
        }
      });
  }

}
