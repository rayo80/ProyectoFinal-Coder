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
  formulario: FormGroup;

  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('Pepe', [Validators.required]),
      apellidos: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
    });
  }

  agregarProfesor(){
    const profesor: any = {
      name: this.formulario.value.name,
      apellidos: this.formulario.value.apellidos,
      edad: this.formulario.value.edad,
      email: this.formulario.value.email,
    };
    console.log(profesor);
    this.profesorService.createProfesor(profesor);
    this.router.navigate(['profesores/listar']); 
  }

  ngOnInit(): void {
  }

}
