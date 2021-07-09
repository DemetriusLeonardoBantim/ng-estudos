import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-controll-erro',
  templateUrl: './campo-controll-erro.component.html',
  styleUrls: ['./campo-controll-erro.component.css']
})
export class CampoControllErroComponent implements OnInit {


  @Input() mostrarErro: boolean = true
  @Input() msgErro: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
