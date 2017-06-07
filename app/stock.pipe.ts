import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'stock',
  pure: false
})

export class StockPipe implements PipeTransform {
  transform(input: Keg[], stockLevel = "0"){
    var output: Keg[] = [];

    switch(stockLevel){
      case "safeStock":
        return input.filter(function(keg){
          return keg.pints > 10;
        });
      case "dangerZone":
        return input.filter(function(keg){
          return keg.pints <= 10 && keg.pints > 0;
        });
      case "emptyKegs":
      return input.filter(function(keg){
        return keg.pints === 0;
      });
      default:
        return input;
    }
  }
}
