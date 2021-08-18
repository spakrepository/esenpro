import { InfraItem } from "./infraitem.model";

export interface Infrastructure {
  id:number;
  name?: string;
  item?: InfraItem [ ]  
}
