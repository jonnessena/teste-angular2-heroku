import {NgModule} from '@angular/core';// core do ângular
import {BrowserModule} from '@angular/platform-browser'; //indica que a aplicação ângular vai rodar no navegador
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {routing} from './app.routes'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BotaoModule} from './botao/botao.module';
import {ModalModule} from './modal/modal.module';

@NgModule({
    imports: [
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ], //importa todos os módulos usados pelos componentes
    declarations: [AppComponent, CadastroComponent, ListagemComponent],   //O que faz parte do módulo
    bootstrap: [AppComponent]   //Qual o componente quer inicar quando o módulo for carregado
})
export class AppModule{

}