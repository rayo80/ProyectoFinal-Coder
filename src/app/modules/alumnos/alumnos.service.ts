import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { AlumnoSchema } from './alumno.interface';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  constructor(private http: HttpClient){ }
  root_url = environment.url+'/api/matricula/alumno'
  //alumnos:AlumnoSchema[];
  alumnos: BehaviorSubject<AlumnoSchema[]> = new BehaviorSubject<AlumnoSchema[]>([]);
  alumnoToEdit:AlumnoSchema | null;
  alumnoToDelete:any;

  getStudentToEdit():Observable<any> {
    return of(this.alumnoToEdit);
  }

  getApiStudentsList():Observable<AlumnoSchema[]> {
    return this.http.get<AlumnoSchema[]>(this.root_url)
        .pipe(
            tap((val)=>this.alumnos.next(val))
        )
  }


  getSingleStudent(id:number):Observable<AlumnoSchema> {
    return this.http.get<AlumnoSchema>(this.root_url+'/'+id)
  }

  createApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.post<AlumnoSchema>(this.root_url, alumno)
            .pipe(
              tap((res)=>this.alumnos.next([...this.alumnos.value,res]))
            )
  }

  updateApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.put<AlumnoSchema>(this.root_url+'/'+alumno.id, alumno)
            .pipe(
              tap((res)=>{
                const newAlum = this.alumnos.value.filter(a=>a.id != alumno.id);
                this.alumnos.next([...newAlum, res])
              })
            )
  }

  deleteStudent(alumno: AlumnoSchema):Observable<AlumnoSchema> {
    return this.http.delete<AlumnoSchema>(this.root_url+'/'+alumno.id)
            .pipe(
              tap(()=>{
                const newAlum = this.alumnos.value.filter(a=>a.id != alumno.id);
                this.alumnos.next(newAlum)
              })
            )
  }
}
