import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordersfilter'
})
export class OrdersfilterPipe implements PipeTransform {

  transform(accessories: any, keyword:any): any {
    if(keyword === undefined) return accessories;
    return accessories.filter(function(accessories){
      return accessories.accessoryName.toLowerCase().includes(keyword.toLowerCase());
    })
  }

}
