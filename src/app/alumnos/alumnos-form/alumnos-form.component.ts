import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/shared/alumnos.service';
import { AlumnoSchema } from '../../models/alumno.interface';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {
  formAlumnos:FormGroup;
  alumnoToEdit:any; //alumno a ser editado
  error=false
  index: any;
  @Output() itemAdded = new EventEmitter<any>(); 


  constructor(
    private fbuild: FormBuilder, private alumnosService: AlumnosService,
    private router: Router,
  ) { }

  addAlumno(alumno:AlumnoSchema){
    this.alumnosService.createApiStudent(alumno)
    .subscribe(
      data=>{
        console.log(data);
        // es necesario que el cambio se realice aca porque 
        // esto es asincrono asi que podria ser que se cambie 
        // y todavia no se ha terminado el proceso en este observable        
        this.itemAdded.emit(true);
      }
    )
  }
  updateAlumno(alumno:AlumnoSchema){
    this.alumnosService.updateApiStudent(alumno)
    .subscribe(
      data=>{
        console.log(data);
        this.itemAdded.emit(true);}
    )
  }

  ngOnInit(): void {
    this.formAlumnos = this.fbuild.group({
      name: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
    });
    
    this.alumnosService.getStudentToEdit().subscribe(
      val=>this.alumnoToEdit=val
    )
    
    if(this.alumnoToEdit){
      this.formAlumnos.get('name')?.patchValue(this.alumnoToEdit.name);
      this.formAlumnos.get('apellidos')?.patchValue(this.alumnoToEdit.apellidos);
      this.formAlumnos.get('email')?.patchValue(this.alumnoToEdit.email);
      this.formAlumnos.get('edad')?.patchValue(this.alumnoToEdit.edad);
    }
  }

  onSubmit(){
    
    if((this.formAlumnos.status != 'INVALID')){  
        if(!this.alumnoToEdit){
          this.addAlumno(this.formAlumnos.value);
          this.router.navigate(['/alumnos']);
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
