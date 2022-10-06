import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService) { }

buscar(palabra:string){
  this.gifsService.buscarGifs(palabra);
}

get historial(){
  return this.gifsService.historial;
}
  

}
