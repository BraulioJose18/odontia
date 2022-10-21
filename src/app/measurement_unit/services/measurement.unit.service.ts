import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeasurementUnit} from "../interfaces/measurement.unit.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/measurement_unit/'
  constructor(
    private http: HttpClient
  ) {
  }
  getMeasurementUnit(): Observable<MeasurementUnit[]> {
    return this.http.get<MeasurementUnit[]>(this.baseUrl)
  }
  getMeasurementUnitById(id: string): Observable<MeasurementUnit[]> {
    return this.http.get<MeasurementUnit[]>(this.baseUrl+id)
  }
  addMeasurementUnit(category: MeasurementUnit): Observable<MeasurementUnit> {
    return this.http.post<MeasurementUnit>(this.baseUrl,category)
  }
}
