import { AlumnosService } from '../alumnos.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { AlumnoSchema } from 'src/app/modules/alumnos/alumno.interface';
import { AlumnosFormComponent } from '../alumnos-form/alumnos-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private router: Router, 
    private alumnosService: AlumnosService) { }

  hasDetroyed$ = new Subject<boolean>();
  //Tabla y paginación
  alumnos = new MatTableDataSource<AlumnoSchema>(); //se recibe data pero ya no en una lista sino en un objeto
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'last_name', 'complete', 'codigo',
                                'email', 'edad', 'address', 'editar', 'eliminar', 'ver mas'];

  getAlumnos(){
    this.alumnosService.alumnos
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.alumnos.data=val
      )
  }

  deleteAlumno(elemento:AlumnoSchema){
    this.alumnosService.deleteStudent(elemento).subscribe({ 
      complete: ()=> this.getAlumnos()
    })
  }

  ngOnInit(): void {
    this.alumnosService.getApiStudentsList().subscribe()
    this.getAlumnos();
  }

  ngAfterViewInit() {
    this.alumnos.paginator = this.paginator;
    this.alumnos.sort = this.sort;
  }

  onUpdate(elemento:AlumnoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.alumnosService.alumnoToEdit=elemento;
    this.dialog.open(AlumnosFormComponent)
  }

  onDelete(elemento:AlumnoSchema){
    this.deleteAlumno(elemento);
  }

  onDetail(elemento:AlumnoSchema){
    this.router.navigate(['alumnos/detalle/', elemento.id]);
  }


  onCreate(){
    this.alumnosService.alumnoToEdit=null;
    this.dialog.open(AlumnosFormComponent, 
      { disableClose: false });
  }

  refreshTable() {
    this.getAlumnos();
  }

  ngOnDestroy(){
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }
}
