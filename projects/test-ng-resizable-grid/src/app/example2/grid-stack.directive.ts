import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';
declare var $: any; // JQuery

@Directive({
  selector: '[gridStack]'
})

export class GridStackDirective implements OnInit {
  @Input() w: number;
  @Input() animate: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    renderer.setElementAttribute(el.nativeElement, "class", "grid-stack");
  }

  ngOnInit() {
    let renderer = this.renderer;
    let nativeElement = this.el.nativeElement;
    let animate: string = this.animate ? "yes" : "no";

    renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
    if(animate == "yes") {
      renderer.setElementAttribute(nativeElement, "data-gs-animate", animate);
    }

  }

}
