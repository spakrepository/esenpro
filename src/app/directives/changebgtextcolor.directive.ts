import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebgtextcolor]'
})
export class ChangebgtextcolorDirective {

  toggleClass: boolean = false;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
    ) {
  }


  ngAfterViewInit() {
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.toggleClass = !this.toggleClass;
    if(this.toggleClass == true) {
      this.addClassToElem();
    } else {
      this.removeClassToElm();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleClass = !this.toggleClass;
    if(this.toggleClass == true) {
      this.addClassToElem();
    } else {
      this.removeClassToElm();
    }
  }



  addClassToElem():void {
    this.renderer.addClass(this.elem.nativeElement, 'active');
  }

  removeClassToElm():void {
    this.renderer.removeClass(this.elem.nativeElement, 'active');
  }

}
