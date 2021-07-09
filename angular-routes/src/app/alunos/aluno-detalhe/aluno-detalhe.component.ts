import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { Subscription } from 'rxjs';
import {AlunosService} from '../alunos.service'

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  id:number = 0
  inscricao!: Subscription
  aluno: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {

  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      ( params:any) => {
        this.id = params['id']

        this.aluno = this.alunosService.getAluno(this.id)
      }
    )
  }


  editarContato(){
    //rotas imperativas
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}




