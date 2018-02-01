import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(items: any, res: string): any {
    if (res === undefined || res === '') {
     return items;
    }
    if (res !== undefined) {
      return items.filter(function(item) {
        return item.CompanyName.toLowerCase().includes(res.toLowerCase());
      });
    }
  }

}
