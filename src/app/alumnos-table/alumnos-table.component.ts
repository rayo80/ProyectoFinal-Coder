import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AlumnoSchema } from './alumno.interface'

const ELEMENT_DATA: AlumnoSchema[] = [
];

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() alumnos: AlumnoSchema[]; //se recibe data
  @Output() alumnoToEdit= new EventEmitter<AlumnoSchema>();//esta data se envia con el boton editar
  
  displayedColumns: string[] = ['id', 'name', 'apellido', 'edad', 'email', 'botones'];
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;

  refresh(){
    this.table.renderRows();
  }

  onUpdate(elemento:AlumnoSchema){
    console.log(elemento)
    //ahora este lo enviamos a nuestro formulario
    this.alumnoToEdit.emit(elemento);
  }
}
