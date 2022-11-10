import {Permission} from "../../permission/interfaces/permission.interface";

export interface Role {
  id?:     number;
  name:   string;
  status: boolean;
  permission?: Permission;
}
