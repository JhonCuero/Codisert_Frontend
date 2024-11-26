import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-1',
  imports: [],
  templateUrl: './index-1.component.html',
  styleUrl: './index-1.component.scss'
})
export class Index1Component {
    constructor(private Explorador: Router){

    }

    Siguiente(){
      this.Explorador.navigate(["index"]);
    }
}
