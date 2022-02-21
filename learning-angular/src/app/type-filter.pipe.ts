import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface"

@Pipe ({name: 'systemTypes'})
export class SystemTypesPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string): Content[] {

    return contentArray.filter(gaming => {
      console.log("Video Game Title: ", gaming.title, " type is set to ", gaming.type);
      return type ? gaming.type === type : (!gaming.type || gaming.type === '');
    });

  }
}
