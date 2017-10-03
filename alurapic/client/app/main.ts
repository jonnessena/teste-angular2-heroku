import {platformBrowserDynamic}  from '@angular/platform-browser-dynamic'; //Representa que será apresentando em browser
import {AppModule} from './app.module'; //Quem é o m[odulo principal

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //Adiciona bootstrap