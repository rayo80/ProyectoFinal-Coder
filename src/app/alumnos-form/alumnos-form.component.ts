import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoSchema } from '../alumnos-table/alumno.interface';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {
  formAlumnos:FormGroup;
  error=false

  @Input() alumnoToEdit:AlumnoSchema|null; //alumno a ser editado

  /*dos outputs uno para agregar y otro para editar*/
  @Output() itemAdded = new EventEmitter<any>(); 
  @Output() itemEdited = new EventEmitter<any>(); 
  constructor(
    private fbuild: FormBuilder 
  ) { }

  ngOnInit(): void {
    this.formAlumnos = this.fbuild.group({
      name: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
  });
  if(this.alumnoToEdit){
    this.formAlumnos.get('name')?.patchValue(this.alumnoToEdit.name);
    this.formAlumnos.get('apellido')?.patchValue(this.alumnoToEdit.apellidos);
    this.formAlumnos.get('email')?.patchValue(this.alumnoToEdit.email);
    this.formAlumnos.get('edad')?.patchValue(this.alumnoToEdit.edad);
  }
  }

  onSubmit(){
    
    if((this.formAlumnos.status != 'INVALID')){     
      if(!this.alumnoToEdit){
        this.itemAdded.emit(this.formAlumnos.value);
      }else{
        this.formAlumnos.value['id']=this.alumnoToEdit.id
        let alumnoEdited=this.formAlumnos.value;
        this.itemEdited.emit(alumnoEdited);
      }
    }else{
      this.error=true;
      console.log(this.formAlumnos)
    }
  }

  
}
