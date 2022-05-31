import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {
  formAlumnos:FormGroup;
  error=false

//  @Input() alumnoToEdit:Alumnos|null; //alumno a ser editado
  @Output() itemAdded = new EventEmitter<any>(); //item añadido por el form 
//  @Output() itemEdited = new EventEmitter<any>(); // item editado por el form
  constructor(
    private fbuild: FormBuilder 
  ) { }

  ngOnInit(): void {
    this.formAlumnos = this.fbuild.group({
      name: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', Validators.email],
      edad:['',[Validators.required, Validators.maxLength(2)]],
  });
  }

  onSubmit(){
    if((this.formAlumnos.status != 'INVALID')){     
      this.itemAdded.emit(this.formAlumnos.value)
      this.error =false 
    }else{
      this.error=true;
      console.log(this.formAlumnos)
    }
  }
}
