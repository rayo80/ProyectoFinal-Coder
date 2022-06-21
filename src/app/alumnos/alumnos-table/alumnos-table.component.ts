import { AlumnosService } from './../../shared/alumnos.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlumnoSchema } from '../../models/alumno.interface'
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent implements OnInit {

  constructor(private router: Router, private alumnosService: AlumnosService) { }
  alumnos = new MatTableDataSource<AlumnoSchema>(); //se recibe data pero ya no en una lista sino en un objeto
  getAlumnos(){
    this.alumnosService.getApiStudentsList().subscribe(
      (val)=>this.alumnos.data=val
    )
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.getAlumnos();
    this.alumnos.paginator = this.paginator;
  }
  ngAfterViewInit() {
    console.log(this.paginator)
    this.alumnos.paginator = this.paginator;
  }
  
  @Output() OcultarTabla= new EventEmitter<any>();


  displayedColumns: string[] = ['id', 'name', 'apellido', 'complete', 'email', 'edad', 'editar', 'eliminar'];
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;

  onUpdate(elemento:AlumnoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.alumnosService.alumnoToEdit=elemento;
    this.OcultarTabla.emit(true);
  }

  onDelete(elemento:AlumnoSchema){
    let indexOfAlumnos=this.alumnos.data.findIndex((al:any) => al.id===elemento.id);

    this.alumnos.data.splice(indexOfAlumnos,1);
    this.alumnosService.alumnoslist=this.alumnos!
    this.table.renderRows();
    //ahora que eliminamos actualizaremos la data de alumnos
  }

  onAdd() {
    //al hacer click ocultamos nuestra tabla y mostramos solo el formulario
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }
  
}
