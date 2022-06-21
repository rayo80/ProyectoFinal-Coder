import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoSchema } from 'src/app/models/curso.interface';
import { CursosService } from 'src/app/shared/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  formCursos:FormGroup;
  cursoToEdit:any; //cursoto Edit
  error = false
  index: any;
  @Output() VerForm= new EventEmitter<any>();
  constructor(   private fbuild: FormBuilder, private cursosService: CursosService,
    ) { }

  addCurso(curso:CursoSchema){
    this.cursosService.createCurso(curso).subscribe(
      val=>{
        console.log(val);
        this.VerForm.emit(true);
      }
    )
  }

  updateCurso(curso:CursoSchema){
    this.cursosService.updateCurso(curso).subscribe(
      val=>{
        console.log(val);
        this.VerForm.emit(true);
      }
    )
  }

  ngOnInit(): void {
    this.formCursos = this.fbuild.group({
      name: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      horario: ['', [Validators.required, ]],
      profesor: ['', [Validators.required, ]],

    });
    //el alumno a editar no cambia asi que lo podemos traer rapidamente
    this.cursosService.getCursoToEdit().subscribe(
      val=>this.cursoToEdit=val
    )
    
    if(this.cursoToEdit){
      this.formCursos.get('name')?.patchValue(this.cursoToEdit.name);
      this.formCursos.get('codigo')?.patchValue(this.cursoToEdit.codigo);
      this.formCursos.get('horario')?.patchValue(this.cursoToEdit.horario);
      this.formCursos.get('profesor')?.patchValue(this.cursoToEdit.profesor);
    }
  }

  onSubmit(){
      if((this.formCursos.status != 'INVALID')){  
          if(!this.cursoToEdit ){
            this.addCurso(this.formCursos.value);
          }else{
            this.formCursos.value['id'] = this.cursoToEdit.id;
            this.updateCurso(this.formCursos.value);
            this.cursosService.cursoToEdit = null;
          }        
        }
      else{
            console.log('error')
      }  
}
}