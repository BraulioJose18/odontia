import {Product} from "../../product/interfaces/product.interface";

export interface Expiration {
  id?:     number;
  dateExpiration:   Date;
  quantity: number;
  product?: Product
}

export interface  DetailCustomExpiration {
  dateExpiration:   Date;
  quantity: number;
}

export interface CustomExpiration {
  product?: Product,
  details: DetailCustomExpiration[]
}
