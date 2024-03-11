import { ProfesorSchema } from './../profesor.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesoresService } from '../profesores.service';

@Component({
  selector: 'app-profesor-editar',
  templateUrl: './profesor-editar.component.html',
  styleUrls: ['./profesor-editar.component.scss']
})
export class ProfesorEditarComponent implements OnInit {

  param_prof!: ProfesorSchema;
  formulario!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profesorService: ProfesoresService,
    private router: Router
  ){
  }

  save(){
    this.profesorService.updateProfesor(this.formulario.value);
    this.router.navigate(['profesores/listar']); 
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)
      this.param_prof = {
        id: parseInt(parametros.get('id') || '0'),
        name: parametros.get('name') || '',
        codigo: parametros.get('codigo') || '',
        formacion: parametros.get('formacion') || '',
        email: parametros.get('email') || '',
        picture: parametros.get('picture') || '',
      }

      this.formulario = new FormGroup({
        name: new FormControl(this.param_prof.name, [Validators.required]),
        codigo: new FormControl(this.param_prof.codigo),
        formacion: new FormControl(this.param_prof.formacion),
        email: new FormControl(this.param_prof.email),
        picture: new FormControl(this.param_prof.picture),
        id: new FormControl(this.param_prof.id),
      });
      
  })
  }

}
