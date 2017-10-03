import { Http } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FotoService } from './../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'

})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();
    meuForm : FormGroup;
    service: FotoService;
    route: ActivatedRoute; //Acessa os parâmetros da URL
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb : FormBuilder, route: ActivatedRoute, router: Router){
        this.service = service;
        this.router = router;
        this.route = route;

        //Acessa os parâmetros da URL
        this.route.params.subscribe( params =>{
            let id = params['id'];// igual ao cadastro/:id cadastrado no arquivo de rotas.
            console.log(id);
            if(id){

                this.service.buscaPorId(id)
                .subscribe(foto =>{
                    this.foto = foto;
                    console.log(id);
                }, erro =>{
                    console.log('Essa foto não existe!');
                });
            }
        });

        // this.http = http;
        //Para associar os atributos da foto com o meuForm é necessário criar o 
        // atributo formControlName no html
        // Isso serve para trazer a validação dos dados no model.

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
        
        this.foto.titulo = "A";
        this.foto.descricao = "B";
        this.foto.url = "C";
    }

    cadastrar(event){
        event.preventDefault();

        console.log(this.foto);

        // this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
        // .subscribe( () =>{
        //     this.foto = new FotoComponent();
        //     this.foto.descricao='';
        //     this.foto.titulo='';
        //     this.foto.url = '';

        //         console.log('Foto salva com sucesso!');
        // }, erro => {
        //     console.log(erro);
        // });
        // usando o serviço
        this.service.cadastra(this.foto)
        .subscribe( res => {
            this.mensagem = res.getMensagem();
            this.foto = new FotoComponent();
            this.foto.descricao='';
            this.foto.titulo='';
            this.foto.url = '';
            if(!res.isInclusao()) this.router.navigate(['']);
        }, erro =>{
            console.log(erro);
        });
    }
}