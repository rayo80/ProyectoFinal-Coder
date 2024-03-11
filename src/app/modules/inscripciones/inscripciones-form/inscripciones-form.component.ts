import { InscripcionModel, InscripcionSchema, SvInscripcionSchema } from 'src/app/modules/inscripciones/inscripciones.interface';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlumnoSchema } from 'src/app/modules/alumnos/alumno.interface';

import { CursoModel, CursoSchema } from 'src/app/modules/cursos/curso.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InscripcionesService } from '../inscripciones.service';
import { CursosService } from '../../cursos/curso.service';
import { AlumnosService } from '../../alumnos/alumnos.service';

@Component({
  selector: 'app-inscripciones-form',
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.scss']
})
export class InscripcionesFormComponent implements OnInit {

  constructor(private fbuild:FormBuilder,
              private inscripcionesService:InscripcionesService,
              private alumnosService:AlumnosService,
              private cursosService: CursosService,
              public dialogRef:MatDialogRef<InscripcionesFormComponent>) { }
            
  formInscripciones:FormGroup;
  inscripcionToEdit:InscripcionModel; //inscripcion a ser editado
  error=false;
  @Output() refreshTable:boolean = false;
  alumnos: AlumnoSchema[];
  cursos: CursoModel[];

  addInscripcion(inscripcion:InscripcionModel){
    
    this.inscripcionesService.createItem(inscripcion).subscribe({
      complete: ()=>{this.dialogRef.close();}}
  )}

  updateInscripcion(inscripcion:InscripcionModel){
    console.log(inscripcion)
    this.inscripcionesService.editItem(inscripcion).subscribe({
      complete: ()=>{this.dialogRef.close();}
  })}

  getAlumnosList(){
    this.alumnosService.getApiStudentsList().subscribe(
      (val) => this.alumnos = val  
    )
  }

  getCursosList(){
    this.cursosService.getListCache().subscribe(
      (val) => this.cursos = val 
    )
  }

  getElementEdit(){

    this.inscripcionesService.oneItem.subscribe(
      val=>{
        this.inscripcionToEdit=val;}
    )
  }

  ngOnInit(): void {
    this.getAlumnosList();
    this.getCursosList();
    this.formInscripciones = this.fbuild.group({
      alumno: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      monto: ['', [Validators.required]],
    })
    this.getElementEdit();
    
    if(this.inscripcionToEdit){
      this.formInscripciones.get('monto')?.patchValue(this.inscripcionToEdit.monto);
      this.formInscripciones.get('alumno')?.patchValue(this.inscripcionToEdit.alumno);
      this.formInscripciones.get('curso')?.patchValue(this.inscripcionToEdit.curso);
      this.formInscripciones.get('fecha')?.patchValue(this.inscripcionToEdit.fecha);
    }
  }

  onSubmit(){

    if((this.formInscripciones.status != 'INVALID')){  

        if(!this.inscripcionToEdit){
          this.addInscripcion(this.formInscripciones.value);
        }else{
          this.formInscripciones.value['id'] = this.inscripcionToEdit.id;
          this.updateInscripcion(this.formInscripciones.value);
          this.inscripcionesService.oneItem=null;
        }
    }else{
      this.error=true;
    }
  }

}
