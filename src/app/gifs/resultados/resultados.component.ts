import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get respuesta(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService:GifsService) { }
  
  

}
