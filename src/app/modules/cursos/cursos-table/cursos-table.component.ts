import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IListColums } from '../../plantillas/list-base/list-base.types';
import { CursosService } from '../curso.service';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';


@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss']
})
export class CursosTableComponent{


  constructor(
    private _cursosService: CursosService,
  ) { }


  cursosService=this._cursosService;
  optionsColumns: string[] = ['Editar', 'Eliminar'];
  cursoColumns: IListColums[] =[
    { 
      'name': 'ID',
      'code': 'id',
    },
    {
      'name': 'Name',
      'code': 'name',
    },
    {      
      'name': 'Horario',
      'code': 'horario',
    },
    {
      'name': 'Codigo',
      'code': 'codigo',
    },
    {
      'name': 'Profesor',
      'code': 'teacherName',
    },
    {
      'name': 'FechaInicio',
      'code': 'start_date',
    },
    {
      'name': 'FechaFinal',
      'code': 'end_date',
    }
  ]

  modalCursos = CursosFormComponent
  
}
