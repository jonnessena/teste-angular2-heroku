import {Component, Input, ViewEncapsulation} from '@angular/core';


@Component({
    //Serve para que o angular sempre procure caminhos na pasta relativa dele.
    //No lugar de usar "./app/foto/foto.component.html"
    //pode usar "./foto.component.html'
    // moduleId: module.id,     
    moduleId: module.id, 
    selector: 'foto',
    templateUrl: './foto.component.html', //Esse componente pode alterar esse template,
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FotoComponent{

    @Input() titulo : string;
    @Input() url : string;
    descricao: string;
    _id: string;
}