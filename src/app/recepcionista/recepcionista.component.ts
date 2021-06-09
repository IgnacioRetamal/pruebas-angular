import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { kgALibrasPipe } from '../pipes/kg_a_libras'
@Component({
  selector: 'app-recepcionista',
  templateUrl: './recepcionista.component.html',
  providers: [kgALibrasPipe]
})
export class RecepcionistaComponent implements OnInit {

  @Input() dataPersona: any;
  @Output() nombreEvento = new EventEmitter<any>();

  nombre = "";
  pesoEnGramos: number;
  constructor(private pipe: kgALibrasPipe) { }

  ngOnInit(): void {
    this.dataPersona

  }

  retornaValor() {
    this.dataPersona.nombre = this.nombre // SI SACO ESTO NO SE MODIFICA EL CAMPO NOMBRE DE RECEPCIONISTA
    //this.nombreEvento.emit(this.dataPersona.nombre); //SI REEMPLAZO ESTO POR THIS.NOMBRE SE VE SOLO EL NOMBRE EN LA ULTIMA INTERPOLACION
    this.pesoEnGramos = this.pipe.transform(this.dataPersona.peso) // EN HIJO
    this.nombreEvento.emit(this.pesoEnGramos); // ESTE ENVIA A CONTENTEDOR PADRE
  }
}
