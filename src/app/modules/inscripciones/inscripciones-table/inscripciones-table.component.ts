import { Component} from '@angular/core';
import { IListColums } from '../../plantillas/list-base/list-base.types';
import { InscripcionesFormComponent } from '../inscripciones-form/inscripciones-form.component';
import { InscripcionesService } from '../inscripciones.service';


@Component({
  selector: 'app-inscripciones-table',
  templateUrl: './inscripciones-table.component.html',
  styleUrls: ['./inscripciones-table.component.scss']
})
export class InscripcionesTableComponent{

  constructor(private _inscripcionesService: InscripcionesService) { }


  inscripcionesService = this._inscripcionesService
  optionsColumns: string[] = ['Editar', 'Eliminar'];

  cursoColumns: IListColums[] =[
    { 
      'name': 'ID',
      'code': 'id',
    },
    {
      'name': 'Monto',
      'code': 'monto',
    },
    {      
      'name': 'Alumno',
      'code': 'alumnoName',
    },
    {
      'name': 'Curso',
      'code': 'cursoName',
    },
    {
      'name': 'Fecha',
      'code': 'fecha',
    },
  ]

  modalCursos = InscripcionesFormComponent

}
