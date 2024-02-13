import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdirective]'
})
export class CustdirectiveDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.background='teal'
  }

}
