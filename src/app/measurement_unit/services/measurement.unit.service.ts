import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {measurementUnit} from "../interfaces/category.interface";
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
  getCategory(): Observable<measurementUnit[]> {
    return this.http.get<measurementUnit[]>(this.baseUrl)
  }
  getCategoryById(id: string): Observable<measurementUnit[]> {
    return this.http.get<measurementUnit[]>(this.baseUrl+id)
  }
  addCategory(category: measurementUnit): Observable<measurementUnit> {
    return this.http.post<measurementUnit>(this.baseUrl,category)
  }
}
