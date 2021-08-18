import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollaps]'
})
export class CollapsDirective {

  toggleClass: boolean = false;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
    ) {
  }

  ngAfterViewInit() {
  }

  @HostListener('click') mouseClick() {
    this.toggleClass = !this.toggleClass;

    if(this.toggleClass == true) {
      this.addClassToElem();
    } else {
      this.removeClassToElm();
    }
  }

  @HostListener('mouseenter') mouseEnter() {
    //this.changeColor('pink');
  }

  @HostListener('mouseleave') mouseLeave() {
    //this.changeColor(null);
  }

  changeColor(color: string):void {
    this.elem.nativeElement.style.color = color;
  }

  addClassToElem():void {
    this.renderer.addClass(this.elem.nativeElement, 'active');
  }

  removeClassToElm():void {
    this.renderer.removeClass(this.elem.nativeElement, 'active');
  }

}
