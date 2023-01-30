import {MeasurementUnit} from "../../measurement_unit/interfaces/measurement.unit.interface";
import {Subcategory} from "../../subcategory/interfaces/subcategory.interface";
import {Brand} from "../../brand/interfaces/Brand";

export interface Product {
  id?:              number;
  name:            string;
  status:          boolean;
  salePrice:       number;
  purchasePrice:   number;
  specifications:  string;
  observation:     string;
  stock:           number;
  minimumStock:    number;
  averageStock:    number;
  subcategory:     Subcategory;
  measurementUnit: MeasurementUnit;
  brand:           Brand;
  hasExpiration: boolean;
}
