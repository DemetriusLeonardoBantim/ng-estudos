import { HttpClient,HttpEvent,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {



  constructor(
    private http: HttpClient
  ) { }

  getEstadosBr(){
    return this.http.get('assets/dados/estadosbr.json').map((response:any) => response)
  }

  getCargos(){
    return [
      {nome:"Dev", nivel:"Junior", desc: 'Dev Jr'},
      {nome: "Dev", nivel:"Pleno", desc: 'Dev Pleno'},
      {nome: "Dev", nivel: "Senior", desc: 'Dev Senior'}
    ]
  }

  getAnosDeExp(){
    return[
      {op: "Menos de 1 ano"},
      {op: "Entre 1 a 2 anos"},
      {op: "Entre 2 a 4 anos"},
      {op: "Mais de 4 anos"}
    ]
  }



  getTecnologias(){
    return [
      { nome: 'java', desc: 'Java'},
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ]
  }

}
