import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({ name: 'kgALibrasPipe'})
export class kgALibrasPipe implements PipeTransform{
    transform(value:number) : number {
        const lbInKg = 2.20462; 
        if(!isNaN(value)){
            return value * lbInKg; 
        }
        return null; 
    }
}


