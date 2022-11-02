import { AlumnosService } from '../alumnos.service';
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
  //Modal abrir
  @Output() openForm: EventEmitter<boolean> = new EventEmitter();

  //Tabla y paginación
  alumnos = new MatTableDataSource<AlumnoSchema>(); //se recibe data pero ya no en una lista sino en un objeto
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;
  displayedColumns: string[] = ['id', 'name', 'apellido', 'complete', 'email', 'edad', 'editar', 'eliminar'];

  getAlumnos(){
    this.alumnosService.getApiStudentsList().subscribe(
      (val)=>this.alumnos.data=val
    )
  }

  deleteAlumno(elemento:AlumnoSchema){
    this.alumnosService.deleteStudent(elemento).subscribe({ 
      complete: ()=> this.getAlumnos()
    })
  }

  ngOnInit(): void {
    this.getAlumnos();
  }

  ngAfterViewInit() {
    this.alumnos.paginator = this.paginator;
  }

  onUpdate(elemento:AlumnoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.alumnosService.alumnoToEdit=elemento;
    this.openForm.emit(true);
  }

  onDelete(elemento:AlumnoSchema){
    this.deleteAlumno(elemento);
  }

  refreshTable() {
    this.getAlumnos();
  }
  
}
