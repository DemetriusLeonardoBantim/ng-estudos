import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import {Observable} from 'rxjs'
import {Dev} from '../shared/models/dev'


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup
  estados: Observable<EstadoBr[]> | any;
  habilidades: Observable<Dev[]> | any
  anosDeExp: Observable<String[]> | any
  tecnologias: Observable<String[]> | any

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private dropdownService:DropdownService,
    private cepService : ConsultaCepService
  ) {
   }

  ngOnInit() {

    this.estados
    this.habilidades
    this.anosDeExp
    this.tecnologias


    this.dropdownService.getEstadosBr().subscribe(dados => {this.estados = dados})
    this.dropdownService.getCargos()
    this.habilidades = this.dropdownService.getCargos()
    this.anosDeExp = this.dropdownService.getAnosDeExp()
    this.tecnologias = this.dropdownService.getTecnologias()

    /*  this.formulario = new FormGroup({
      nome: new FormControl('null'),
      email: new FormControl('null'),
    }) */

    let teste =[{
      id: 1,
      nome: 'demetrius',
      peso: 85
    }]


    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null,Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      programador: this.formBuilder.group({
        habilidadeNome: [null],
        anosDeExp: [null]
      }),
      termos: [null,Validators.pattern('true')]
    })
    //Validators.patterns para trabalhar com expressoes regulares
  }


  requiredMinCheckbox(min:Number = 1){
    const validator = (formArray: FormArray) => {
      const values = formArray.controls
      const totalChecked = formArray.controls.map(v => v.value).reduce((total, current) => current ? total + current : total, 0)
      return totalChecked >= min ? null : {required : true}
    }
    return validator
  }


  // Nz Zorro


  onSubmit(){
    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe((dados:any) => {
        console.log(dados.json)
        this.formulario.reset()
      })
    }else{
      alert('formulario invalido')
      this.verificaValidacoesForm(this.formulario)
    }
  }


  verificaValidacoesForm(formGroup:FormGroup){
    Object.keys(this.formulario.controls).forEach((campo:any) => {
      const controle = formGroup.get(campo)
      controle?.markAsDirty()
      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle)
      }
    })
  }



  resetar(){
    this.formulario.reset()
  }

  verificaValidTouched(campo: any){
    return this.formulario.get(campo)?.valid  && this.formulario.get(campo)?.touched
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email')
    if(campoEmail?.errors){
      return campoEmail.errors['email'] && campoEmail.touched
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(){
    const cep = this.formulario.get('endereco.cep')?.value

    if(cep != null && cep !== ''){
      this.cepService.consultaCEP(cep)?.subscribe(dados => {this.populaDadosForm(dados)})
    }
  }




  populaDadosForm(dados: any){

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado:null
      }
    })
  }


}
