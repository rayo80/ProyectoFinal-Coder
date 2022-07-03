import { InscripcionSchema } from 'src/app/models/inscripciones.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscripcionesService } from 'src/app/shared/inscripciones.service';
import { AlumnoSchema } from 'src/app/models/alumno.interface';
import { AlumnosService } from 'src/app/shared/alumnos.service';
import { CursosService } from 'src/app/shared/cursos.service';
import { CursoSchema } from 'src/app/models/curso.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inscripciones-form',
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.scss']
})
export class InscripcionesFormComponent implements OnInit {
  constructor(private fbuild:FormBuilder,private inscripcionesService:InscripcionesService,
              private alumnosService:AlumnosService, private cursosService: CursosService,
              public dialog: MatDialog) { }
            
  formInscripciones:FormGroup;
  inscripcionToEdit:InscripcionSchema; //inscripcion a ser editado
  error=false;
  index: any;
  alumnos: AlumnoSchema[];
  cursos: CursoSchema[];
  addInscripcion(inscripcion:InscripcionSchema){
    this.inscripcionesService.createInscripcion(inscripcion).subscribe(
      (data)=>{
        console.log(data);
      }
  )}

  updateInscripcion(inscripcion:InscripcionSchema){
    this.inscripcionesService.updateInscripcion(inscripcion).subscribe(
      data=>{console.log(data)}
    )
  }
  getAlumnosList(){
    this.alumnosService.getApiStudentsList().subscribe(
      (val) => this.alumnos = val  
    )
  }

  getCursosList(){
    this.cursosService.getCursosList().subscribe(
      (val) => this.cursos = val 
    )
  }

  ngOnInit(): void {
    this.getAlumnosList();
    this.getCursosList();
    this.formInscripciones = this.fbuild.group({
      alumno: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
    })
    this.inscripcionesService.getInscripcionToEdit().subscribe(
      val=>this.inscripcionToEdit=val
    )
    
    if(this.inscripcionToEdit){
      this.formInscripciones.get('name')?.patchValue(this.inscripcionToEdit.codigo);
      this.formInscripciones.get('apellidos')?.patchValue(this.inscripcionToEdit.alumno);
      this.formInscripciones.get('email')?.patchValue(this.inscripcionToEdit.curso);
      this.formInscripciones.get('edad')?.patchValue(this.inscripcionToEdit.fecha);
    }
  }

  onSubmit(){
    console.log(this.formInscripciones.value);
    if((this.formInscripciones.status != 'INVALID')){  
        if(!this.inscripcionToEdit){
          this.addInscripcion(this.formInscripciones.value);
        }else{
          this.formInscripciones.value['id'] = this.inscripcionToEdit.id;
          this.updateInscripcion(this.formInscripciones.value);
          this.inscripcionesService.inscripcionToEdit=null;
        }
    }else{
      this.error=true;
    }
  }

}
