import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCap'
})
export class NameCapPipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      let newvalue = value.charAt(0).toLowerCase() + value.slice(1);
      return newvalue;
    }
  }

}
