import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AlumnoSchema } from '../../alumnos/alumno.interface';
import { ProfesorSchema } from '../../profesores/profesor.interface';
import { ProfesoresService } from '../../profesores/profesores.service';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.scss']
})
export class UsuariosTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<ProfesorSchema>;
  @ViewChild(MatSort) sort: MatSort;
  hasDetroyed$ = new Subject<boolean>();
  profesores = new MatTableDataSource<AlumnoSchema>();

  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) { }

  getProfesores(){
    this.profesorService.getProfesores()
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.profesores.data=val
      )
  }
  displayedColumns: string[] = ['id', 'name', 'apellido',
  'email', 'edad', 'ver mas'];

  ngOnInit(): void {
    this.getProfesores()
  }
  
  onDelete(elemento:AlumnoSchema){
    
  }

  onDetail(elemento:AlumnoSchema){

  }

  onCreate(){

  }

  onUpdate(elemento:AlumnoSchema){

  }

  ngOnDestroy(){
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }
}
