import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'htmlsanitization'
})
export class HtmlsanitizationPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

}
