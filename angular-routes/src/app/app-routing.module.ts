import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// import {CursoDetalheComponent} from './cursos/curso-detalhe/curso-detalhe.component'
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
// import { CursosComponent } from './cursos/cursos.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

  //lazing model
const  appRoutes: Routes = [
  {path: 'cursos',
    loadChildren: () => import("./cursos/cursos.module").then(m => m.CursosModule),
    canActivate: [AuthGuard] },
  {path:'alunos',
    loadChildren: () => import("./alunos/alunos.modules").then(m => m.AlunosModule),
    canActivate: [AuthGuard]},
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component:LoginComponent},
  //{path:  'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
