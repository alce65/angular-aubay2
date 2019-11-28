import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(value:string , ...rest: Array<number>): string {
    let limit = rest[0]
    return(value.length> limit) ? 
      value.substr(0, limit) + '...': value;
  }

}
