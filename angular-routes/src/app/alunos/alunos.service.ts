import { Injectable } from '@angular/core';
import {Aluno} from './aluno'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: "Demetrius", email:"demetriusleonardobantim@hotmail.com"},
    {id: 2, nome: "Leonardo", email:"leonardo@hotmail.com"},
    {id: 3, nome: "Bantim", email:"bantim@hotmail.com"},
    {id: 4, nome: "Vasconcelos", email:"vasconcelos@hotmail.com"},
    {id: 5, nome: "Pedro", email:"pedro@hotmail.com"}
  ]


  getAlunos(){
    return this.alunos
  }


  getAluno(id: number){
    let alunos = this.getAlunos()
    for(let i = 0; i < alunos.length; i++){
      let aluno = alunos[i]
      if(aluno.id == id){
        return aluno
      }
    }
    return null
  }



  constructor() { }
}
