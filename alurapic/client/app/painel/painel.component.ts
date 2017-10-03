import { FiltroPorTitulo } from './../foto/foto.pipes';
import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:"painel",
    templateUrl: "./painel.component.html",
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PainelComponent implements OnInit{
    @Input() titulo : string;
    elemento: ElementRef; //Encapsula o elemento nativo do DOM

    constructor(elemento: ElementRef){

        // this.titulo = 
        //     this.titulo.length >7 ?
        //     this.titulo.substr(0,7) + "..." :
        //     this.titulo;
        this.elemento = elemento;
    }

    // Construtor comentado porque estava dando erro na chamada do título.
    // isso foi causado porque o construtor é chamado antes do Input carregar o título.
    // Para resolver foi criado o ngOnInit que só é executado após o carregamento de todos
    // os Inputs
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.titulo = 
            this.titulo.length > 7 ?
            this.titulo.substr(0,7) + "..." :
            this.titulo;
    }

    fadeOut(cb){
        // Para utilizar o JQUERY no nosso projeto temos que ir no package.json
        // Executar o comando no cmd na pasta de client "npm run typings search jquery" 
        // Vai exibir uma lista com vários sites criados por terceiros que utilizam typing jquery
        // Verifica o que é do jquery e roda o comando: "npm run typings install dt~jquery --global --save"
        // Esse comando deve ser executado dentro da pasta "node ./node_modules/typings/dist/bin"
        // Depois de executar o comando para entrar na pasta acima, executar o "node ./node_modules/typings/dist/bin install dt~jquery --global --save"
        //Será adicionado o JQUERY no arquivo typings.json, em globalDepen
        $(this.elemento.nativeElement).fadeOut(cb);// this.elemento.nativeElement pega o elemento nativo do DOM
    }
}