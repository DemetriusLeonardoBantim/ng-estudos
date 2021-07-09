import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:"Demetrius Leonardo",
    email: "demetriusbantimvas@gmail.com",
    password: "123456"
  }


  onSubmit(form:any){
    console.log(form.value)

  }



  constructor() { }




  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


  consultaCEP(cep:any) {
    console.log(cep)
    cep = cep.replace(/\D/g, '')
    if(cep != ""){
      let validaCep = /^[0-9]{8}$/

      if(validaCep.test(cep)){

      }

    }


  }




}
