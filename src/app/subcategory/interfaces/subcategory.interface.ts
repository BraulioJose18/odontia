import {Category} from "../../category/interfaces/category.interface";

export interface Subcategory {
  id?:     number;
  name:   string;
  status: boolean;
  category?: Category;
}
