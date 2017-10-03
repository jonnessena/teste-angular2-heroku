import { Component, Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent{

    @Input() titulo: string = ' ';
    @Input() frase: string = '';
    @Input() confirma = new EventEmitter();

    constructor(private _element: ElementRef){
        this._element = _element; //Já cria o atributo da classe _element

    }
    
    ngAfterViewInit(){
        
        $(this._element.nativeElement).dialog({
            title: this.titulo, //atribui nosso título ao do modal
            autoOpen: false,
            resizable:  false,
            modal: true,
            buttons: {
                Cancelar: () =>{
                    $(this._element.nativeElement).dialog("close"); //close é a função que fecha o modal
                },
                Confirmar: () =>{
                    $(this._element.nativeElement).dialog("close"); //close é a função que fecha o modal
                    this.confirma.emit(null); //além de fechar o modal, chama nosso evento personalizado
                }
            }
        });
    }

    show(){
        $(this._element.nativeElement).dialog('open');
    }

}