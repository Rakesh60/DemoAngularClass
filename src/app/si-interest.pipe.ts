import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siInterest'
})
export class SiInterestPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    var principle:number=value;
    var time:number=args[0];
    var rate=args[1];
   
    var amount = (principle * time * rate) / 100;
   
    return amount;
  
  }
}
