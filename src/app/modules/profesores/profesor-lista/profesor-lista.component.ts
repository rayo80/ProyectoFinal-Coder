import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfesorSchema } from '../profesor.interface';
import { ProfesoresService } from '../profesores.service';

@Component({
  selector: 'app-profesor-lista',
  templateUrl: './profesor-lista.component.html',
  styleUrls: ['./profesor-lista.component.scss']
})
export class ProfesorListaComponent implements OnInit {

  profesores$!: Observable<ProfesorSchema[]>

  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profesores$ = this.profesorService.getProfesores();
  }

  eliminarProfesor(elemento: ProfesorSchema){
    this.profesorService.deleteProfesor(elemento);
    this.profesores$ = this.profesorService.getProfesores();
  }

  editarProfesor(profesor: ProfesorSchema){
    this.router.navigate(['profesores/editar', profesor]);
  }
  onAdd(){
    this.router.navigate(['./agregar'])
  }
}
