import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateFormComponent} from './template-form.component'
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import {CampoControllErroComponent} from '../campo-controll-erro/campo-controll-erro.component'
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [TemplateFormComponent,FormDebugComponent,CampoControllErroComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ]
})
export class TemplateFormModule { }
