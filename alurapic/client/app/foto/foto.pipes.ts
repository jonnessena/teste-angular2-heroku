import {Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{
    
    transform(fotos, digitado: string){
        digitado = digitado.toLowerCase();
        // console.log(fotos);
        // console.log(digitado);
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado)); 
    }
}