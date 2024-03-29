import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlumnoSchema } from '../alumno.interface';
import { AlumnosService } from '../alumnos.service';


@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {
  formAlumnos:FormGroup;
  alumnoToEdit:AlumnoSchema; //alumno a ser editado
  error=false

  constructor(
    private fbuild: FormBuilder, 
    private alumnosService: AlumnosService,
    public dialogRef:MatDialogRef<AlumnosFormComponent>
  ) { }

  addAlumno(alumno:AlumnoSchema){
    this.alumnosService.createApiStudent(alumno)
    .subscribe({
      next:
        data=>{
          // es necesario que el cambio se realice aca porque 
          // esto es asincrono asi que podria ser que se cambie 
          // y todavia no se ha terminado el proceso en este observable        
          this.dialogRef.close();
          // update la lista de items
        },

      })
  }

  updateAlumno(alumno:AlumnoSchema){
    this.alumnosService.updateApiStudent(alumno)
    .subscribe(
      data=>{
        this.dialogRef.close();}
    )
  }

  getStudentEdit(){
    this.alumnosService.getStudentToEdit().subscribe(
      val=>this.alumnoToEdit = val
  )}


  ngOnInit(): void {
    this.formAlumnos = this.fbuild.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, 
                  Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$")]],
      codigo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
    });
    
    this.getStudentEdit();
    
    if(this.alumnoToEdit){
      this.formAlumnos.get('name')?.patchValue(this.alumnoToEdit.name);
      this.formAlumnos.get('last_name')?.patchValue(this.alumnoToEdit.last_name);
      this.formAlumnos.get('email')?.patchValue(this.alumnoToEdit.email);
      this.formAlumnos.get('address')?.patchValue(this.alumnoToEdit.address);
      this.formAlumnos.get('codigo')?.patchValue(this.alumnoToEdit.codigo);
      this.formAlumnos.get('edad')?.patchValue(this.alumnoToEdit.edad);
    }
  }

  onSubmit(){
    
    if((this.formAlumnos.status != 'INVALID')){  
        if(!this.alumnoToEdit){
          this.addAlumno(this.formAlumnos.value);
        }else{
          this.formAlumnos.value['id'] = this.alumnoToEdit.id;
          this.updateAlumno(this.formAlumnos.value);
          this.alumnosService.alumnoToEdit = null;
        }
    }else{
      this.error=true;
    }
  }

}
