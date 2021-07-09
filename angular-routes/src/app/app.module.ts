import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CursosGuard} from './guards/cursos.guard'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosModule } from './cursos/cursos.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosModule} from './alunos/alunos.modules';

//import {routing} from './app.routing';

// import { CursosService } from './cursos/cursos.service';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    //CursosComponent,
    //CursoNaoEncontradoComponent,
    //CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    //AlunosModule,
    AppRoutingModule
    //routing
  ],
  // providers: [CursosService],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
