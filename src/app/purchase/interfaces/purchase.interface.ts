import {User} from "../../user/interfaces/user.interface";
import {Product} from "../../product/interfaces/product.interface";
import {VoucherType} from "../../voucher_type/interfaces/voucher.type.interface";

export interface Purchase {
  id?:     number;
  movementType: number;
  date: Date;
  totalPrice: number;
  user: User;
  voucherType: VoucherType;
  detail: PurchaseDetail[];
}
export interface PurchaseDetail{
  id?: number;
  quantity: number;
  totalPrice: number;
  kardexHeader?: number;
  product: Product;
}

