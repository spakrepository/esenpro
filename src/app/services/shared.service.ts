import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data:any;

  isProductClicked:string;

  constructor() { }

  public setData(obj:any):void {
    this.data = obj;
  }

  public getData():any {
    return this.data;
  }

  public setProductString(val:string):void {
    this.isProductClicked = val;
  }

  public getProductString():string {
    return this.isProductClicked;
  }

}
