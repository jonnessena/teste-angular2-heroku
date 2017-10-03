import { NgModule } from '@angular/core';
import {FotoComponent} from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';


@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo], //Módulos que serão utilizados neste
    exports: [FotoComponent, FiltroPorTitulo], // Destes módulos o que outros poderão utilizar
    providers: [FotoService]
})
export class FotoModule{
    
}