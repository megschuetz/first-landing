import { Pipe, PipeTransform } from '@angular/core';
import { IAlumni } from '../interfaces/alumni';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: IAlumni[], search: string): IAlumni[] {
    if(!search) {
      return value;
    }
    
    const regexp = new RegExp(search, 'i');
    const properties = Object.keys(value[0]);
    const filter = value.filter((storyEntry) => {
     return properties.some((prop) => {
       return regexp.test(storyEntry[prop as keyof IAlumni])
      })
    })
    return filter;
  }

}


