import { ProfesoresService } from './../profesores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProfesorSchema } from '../profesor.interface';

@Component({
  selector: 'app-profesor-detalle',
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.scss']
})
export class ProfesorDetalleComponent implements OnInit {
  alumno$: Observable<ProfesorSchema>;
  item : any

  hasDetroyed$ = new Subject<boolean>();
  
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private service: ProfesoresService
  ) { }


  getItem(id:number): void{
    this.service.getSingleProfesor(id)
        .pipe(takeUntil(this.hasDetroyed$))
        .subscribe({
          next: (val: ProfesorSchema) => (this.item = val),
        })
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.getItem(id);
    })
  }

  regresar(){
    this.router.navigate(['alumnos/listar']);
  }

  ngOnDestroy(): void {
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  } 


}
