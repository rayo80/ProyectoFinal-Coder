import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AlumnoSchema } from './alumno.interface'



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
  @Output() alumnodeleted= new EventEmitter<AlumnoSchema[] | null>();//esta data se envia con el boton editar(poner null)

  displayedColumns: string[] = ['id', 'name', 'apellido', 'email', 'edad', 'editar', 'eliminar'];
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;

  refresh(){
    this.table.renderRows();
  }

  onUpdate(elemento:AlumnoSchema){
    console.log(elemento)
    //ahora este lo enviamos a nuestro formulario
    this.alumnoToEdit.emit(elemento);
  }

  onDelete(elemento:AlumnoSchema){
    console.log(elemento)
    /*ahora para realizar el delete es mas complejo pues tenemos
    esta parte solo seguire el afterclass*/
    //encontrar el elemento
    let index=this.alumnos.findIndex(x=> x.id===elemento.id);
    this.alumnos.splice(index,1);
    this.table.renderRows();
    //ahora que eliminamos actualizaremos la data de alumnos
    this.alumnodeleted.emit(this.alumnos);
  }
}
