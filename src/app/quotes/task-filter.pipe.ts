import { PipeTransform, Pipe } from '@angular/core';
import { Quote } from '../shared/quote.model';

@Pipe({
    name : 'taskFilter'
})

export class taskFilterPipe implements PipeTransform{
    transform(list : Quote[],searchTerm : string): Quote[]{
        if(!list || !searchTerm){
            return list;
        }
        return list.filter(list => list.quotetype.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) ! ==-1);
    }
}
