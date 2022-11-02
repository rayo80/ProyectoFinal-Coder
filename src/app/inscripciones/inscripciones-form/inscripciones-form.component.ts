import { InscripcionSchema } from 'src/app/models/inscripciones.interface';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscripcionesService } from 'src/app/inscripciones/inscripciones.service';
import { AlumnoSchema } from 'src/app/models/alumno.interface';
import { AlumnosService } from 'src/app/alumnos/alumnos.service';
import { CursosService } from 'src/app/cursos/cursos.service';
import { CursoSchema } from 'src/app/models/curso.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripciones-form',
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.scss']
})
export class InscripcionesFormComponent implements OnInit {

  constructor(private fbuild:FormBuilder, private inscripcionesService:InscripcionesService,
              private alumnosService:AlumnosService, private cursosService: CursosService,
              public dialogRef:MatDialogRef<InscripcionesFormComponent>) { }
            
  formInscripciones:FormGroup;
  inscripcionToEdit:InscripcionSchema; //inscripcion a ser editado
  error=false;
  @Output() refreshTable:boolean = false;
  alumnos: AlumnoSchema[];
  cursos: CursoSchema[];
  inscripcionNew:InscripcionSchema;

  addInscripcion(inscripcion:InscripcionSchema){
    this.inscripcionesService.createInscripcion(inscripcion).subscribe({
      complete: ()=>{this.dialogRef.close();}}
  )}

  updateInscripcion(inscripcion:InscripcionSchema){
    this.inscripcionesService.updateInscripcion(inscripcion).subscribe({
      //como ya estamos en la pagina no volvera a cargar ...lo mejor sera usar 
      // comunicacion en tre componenets.
      complete: ()=>{this.dialogRef.close();}
  })}

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

  getElementEdit(){
    // Como mock API no me permite crear un back complejo
    // no puedo manifestar mi idea pero tecnicamente el
    // inscripcion debe tener asociado campos y solo el el metodo get
    // debeberia traer mas informacion de esos campos relacionados 
    // en cuanto al post ,update y delete basta con tener acceso al id del elemento
    this.inscripcionesService.getInscripcionToEdit().subscribe(
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
      codigo: ['', [Validators.required]],
    })
    this.getElementEdit();
    
    if(this.inscripcionToEdit){
      this.formInscripciones.get('codigo')?.patchValue(this.inscripcionToEdit.codigo);
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
          this.inscripcionesService.inscripcionToEdit=null;
        }
    }else{
      this.error=true;
    }
  }

}
