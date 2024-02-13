import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirect]'
})
export class MydirectDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.background = 'yellow';
  }

}
