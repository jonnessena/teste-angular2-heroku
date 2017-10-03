import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', component: ListagemComponent}
]; //Constante que terá todas as nossas rotas

export const routing = RouterModule.forRoot(appRoutes); //Exporta minhas rotas
    