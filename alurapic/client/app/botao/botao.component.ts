import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao', //É como uma tag que poderá ser chamada em qum importa este component 
    templateUrl: './botao.component.html' //Quando for chamado o selector botao, este será o html do selector
})
export class BotaoComponent{

    @Input() nome: string = 'OK';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean;

    executaAcao(){
        if(this.confirmacao){
            
            if(confirm('Deseja excluir?')){
                // alert('Preciso chamar um método de outro componente.');
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }

}