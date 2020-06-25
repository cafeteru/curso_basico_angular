import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTableSuccess]',
})
export class TableSuccessDirective implements OnInit {
  @Input('appTableSuccess')
  showClass: boolean;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.showClass) {
      this.elementRef.nativeElement.classList.add('table-success');
    } else {
      this.elementRef.nativeElement.classList.add('table-warning');
    }
  }
}
