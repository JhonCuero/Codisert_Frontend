import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; */

@Component({
  selector: 'app-index-2',
  imports: [/*BrowserModule, FormsModule, ReactiveFormsModule*/],
  templateUrl: './index-2.component.html',
  styleUrl: './index-2.component.scss'
})
export class Index2Component {

  constructor(private Expl: Router){

  }

  Estado_Ser = ['Activo', 'Suspendido', 'Cancelado'];

  Siguiente(){

  }

  Atras(){
    this.Expl.navigate([""]);
  }
}
