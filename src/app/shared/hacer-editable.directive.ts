import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[aubHacerEditable]'
})
export class HacerEditableDirective implements OnInit{

  @Input() aubHacerEditable: boolean;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.
    setAttribute('contenteditable',this.aubHacerEditable )
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook.
    // Use it to inject dependencies, 
    // but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.element.nativeElement.
    setAttribute('contenteditable',this.aubHacerEditable )
  }

}
