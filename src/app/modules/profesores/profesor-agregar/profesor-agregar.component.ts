import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesorSchema } from '../profesor.interface';
import { ProfesoresService } from '../profesores.service';

@Component({
  selector: 'app-profesor-agregar',
  templateUrl: './profesor-agregar.component.html',
  styleUrls: ['./profesor-agregar.component.scss']
})
export class ProfesorAgregarComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required]),
    codigo: new FormControl(),
    formacion: new FormControl(),
    email: new FormControl(),
    picture: new FormControl(),
  });
  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) {
  }

  save(){
    const profesor: any = {
      name: this.formulario.value.name,
      codigo: this.formulario.value.codigo,
      formacion: this.formulario.value.formacion,
      email: this.formulario.value.email,
      picture: this.formulario.value.picture,
    };
    console.log(profesor);
    this.profesorService.createProfesor(profesor);
    this.router.navigate(['profesores/listar']);

  }

  ngOnInit(): void {

  }

}
