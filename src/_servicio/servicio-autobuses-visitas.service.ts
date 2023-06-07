import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autobuses } from 'src/_modelo/Autobuses';


@Injectable({
  providedIn: 'root'
})
export class ServicioAutobusesVisitasService {

  private url:string=`http://localhost:8080/autobuses`;

  constructor(private http:HttpClient) {

  }

  listarAutobuses():Observable<Autobuses>{
    let respuesta:any=this.http.get<Autobuses>(this.url);
    console.warn(respuesta);
    return respuesta;
  }
}
