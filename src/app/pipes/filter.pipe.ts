import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, res: any): any {
    // if input empty return all items
    if (res === undefined || res === '') {
      return items;
    }
    // if input not empty return filtered items
    return items.filter(function(item) {
      return item.company.name.toLowerCase().includes(res.toLowerCase());
    });
  }

}
