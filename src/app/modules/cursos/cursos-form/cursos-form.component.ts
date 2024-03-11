import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CursoSchema } from 'src/app/modules/cursos/curso.interface';
import { ProfesorSchema } from '../../profesores/profesor.interface';
import { ProfesoresService } from '../../profesores/profesor.service';
import { CursosService } from '../curso.service';


@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  cursoToEdit:any; //curso to Edit

  formCursos = this.fbuild.group({
    id: [null as Number],
    name: ['', [Validators.required]],
    codigo: [null as String],
    horario: ['', [Validators.required, ]],
    teacher: ['', [Validators.required, ]],
    start_date: ['', [Validators.required]],
    end_date: ['', [Validators.required]],
  });
  

  constructor( 
      private _matDialogRef: MatDialogRef<CursosFormComponent>,
      private fbuild: FormBuilder, 
      private _cursoService: CursosService,
      private _profesorService: ProfesoresService,
    ) { }

  cursosService=this._cursoService
  profesorService=this._profesorService
  matDialogRef=this._matDialogRef


  ngOnInit(): void {

    //el alumno a editar no cambia asi que lo podemos traer rapidamente

    this.cursosService.oneItem
      .subscribe(
        val=>this.cursoToEdit=val
      )
    console.log(this.cursoToEdit)
    
    if(this.cursoToEdit){
      this.formCursos.get('name')?.patchValue(this.cursoToEdit.name);
      this.formCursos.get('codigo')?.patchValue(this.cursoToEdit.codigo);
      this.formCursos.get('horario')?.patchValue(this.cursoToEdit.horario);
      this.formCursos.get('teacher')?.patchValue(this.cursoToEdit.teacher.id);
      this.formCursos.get('start_date')?.patchValue(this.cursoToEdit.start_date);
      this.formCursos.get('end_date')?.patchValue(this.cursoToEdit.end_date);
    }
    console.log(this.formCursos.value)
  }


  save() {

  }

}