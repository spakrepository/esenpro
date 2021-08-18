import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'producttextlength'
})
export class ProducttextlengthPipe implements PipeTransform {

  transform(str:string, strLength:number): string {
    //debugger;
    let result;
    if(str.length > 0) {
      return result = str.substr(0, strLength);
    } else {
      return '';
    }

  }

}
