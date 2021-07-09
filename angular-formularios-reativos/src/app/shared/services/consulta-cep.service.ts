import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {



  constructor(private http:HttpClient) { }

  consultaCEP(cep:string){
    let dado
    cep = cep.replace(/\D/g, '')

    if(cep != ''){
      let validaCep = /^[0-9]{8}$/

      if(validaCep?.test(cep)){
        dado = this.http.get(`//viacep.com.br/ws/${cep}/json`)
      }
    }
    return dado
  }

}
