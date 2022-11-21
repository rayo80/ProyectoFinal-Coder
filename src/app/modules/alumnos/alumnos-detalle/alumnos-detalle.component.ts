import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlumnoSchema } from '../alumno.interface';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumnos-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.scss']
})
export class AlumnosDetalleComponent implements OnInit {
  alumno$: Observable<AlumnoSchema>;
  item : any

  hasDetroyed$ = new Subject<boolean>();
  
  constructor(
    private activateRoute: ActivatedRoute, private router: Router,
    private alumnoService: AlumnosService
  ) { }


  getSingleStudent(id:number): void{
    this.alumnoService.getSingleStudent(id)
        .pipe(takeUntil(this.hasDetroyed$))
        .subscribe({
          next: (val: AlumnoSchema) => (this.item = val),
        })
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.getSingleStudent(id);
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
