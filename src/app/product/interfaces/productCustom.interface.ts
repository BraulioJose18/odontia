import {MeasurementUnit} from "../../measurement_unit/interfaces/measurement.unit.interface";
import {Subcategory} from "../../subcategory/interfaces/subcategory.interface";
import {Brand} from "../../brand/interfaces/Brand";

export interface ProductCustom {
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
  subcategory_id:     number;
  subcategory_name: string;
  measurementUnit_id: number;
  unit_name: string;
  brand_id: number;
  brand_name: string;
  hasExpiration: boolean;
  stock_diference: number;
}
