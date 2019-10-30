import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:any[], searchElement:string){
          if(!searchElement){
            return list;
          }
          return list.filter(ls=>{
            const title = ls.title.toString().includes(searchElement);
            return (title);
          })
  }

}
