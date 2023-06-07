import { Component } from '@angular/core';
import { Autobuses } from 'src/_modelo/Autobuses';
import { ServicioAutobusesVisitasService } from 'src/_servicio/servicio-autobuses-visitas.service';

@Component({
  selector: 'app-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.css']
})
export class AutobusesComponent {
  autobuses:Autobuses=new Autobuses();

  constructor(private miServicio:ServicioAutobusesVisitasService){

  }

  ngOninit():void{
    this.miServicio.listarAutobuses().subscribe(datos=>this.autobuses=datos);
  }

}
