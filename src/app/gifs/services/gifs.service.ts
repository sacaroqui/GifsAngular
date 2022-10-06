import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
 
 private ApiKey:string ='EtNRjnChu9kSIKlAWHYeN3aRRsnkjlGh';
 private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
 private _historial:string[]=[];
 public resultados:Gif[] =[] ;

 constructor(private http:HttpClient){
   this._historial = JSON.parse(localStorage.getItem('historial')!) || []; 
   this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
 };
 get historial(){
  return [...this._historial]
 }

 buscarGifs (query:string){
  
  query = query.trim().toLocaleLowerCase();
  if (!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial= this._historial.splice(0,10);
    localStorage.setItem('historial',JSON.stringify(this._historial));
  }

  const params = new HttpParams()
                .set('api_key',this.ApiKey)
                .set('q', query)
                .set('limit', '10');


  this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
           .subscribe((resp) =>{
            this.resultados=resp.data;
            localStorage.setItem('resultados',JSON.stringify (this.resultados));
            console.log(resp.data);
           }) 
  
  // console.log(this._historial);
 }


}
