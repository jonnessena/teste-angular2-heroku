import { PainelComponent } from './../painel/painel.component';
import { Component } from '@angular/core';
import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos : FotoComponent[] = [];
    service : FotoService;
    mensagem: string = '';
    
    // constructor(@Inject (Http) http){ //@Inject Ângular vai injetar o http automaticamente
    constructor(service: FotoService){ //Ou pode ser informado aqui qual o tipo do parâmetro que por debaixo dos panos ele faz o @Inject

        // http
        // .get('v1/fotos')
        // .map( res =>  res.json()) //Dá erro porque o observable não tem o map. Para funcionar tem que ir no app.module e importar dentro dele o map "import 'rxjs/add/operator/map';"
        // .subscribe( foto => { //Observable Stream
            
        //     console.log(this.fotos = foto);
        // }, erro => console.log(erro));
        //listando com serviço
        this.service = service;

        service.lista()
        .subscribe( fotos => {
            this.fotos = fotos;
        }, erro => console.log(erro));
    }

    remove(foto: FotoComponent, painel: PainelComponent){
        console.log(foto);
        
            this.service.remove(foto)
            .subscribe(() =>{
                // let indice = this.fotos.indexOf(foto);
                // this.fotos.splice(indice, 1);   //Remove uma foto deste índice
                // console.log('Foto removida com sucesso!');
                
                painel.fadeOut( () => { //FadeOut recebe callback com função que vai ser executado após o fadeout

                    //Teve que ser criado um novo array para que o Ângular detecte e atualize  view automaticamente
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);   //Remove uma foto deste índice
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso!';
                });
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover a foto.';
            });
        
    }
}