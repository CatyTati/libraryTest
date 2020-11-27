import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//   transform(value: any, searchValue): any {
//     console.log(value,searchValue);
//     if (!searchValue) return value;
//     return value.filter((v) => v.name && v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.size.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

//   }
transform(items: Array<any>, term: any) {

    if (Array.isArray(items) && items.length && term && term.length) {
      return items.filter(item => {
        let keys = Object.keys(item);
        if (Array.isArray(keys) && keys.length) {
          for (let key of keys) {
            if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
              return true;
            }
          }
          return false;
        } else {
          return false;
        }
      });
    } else {
      return items;
    }
  }

}