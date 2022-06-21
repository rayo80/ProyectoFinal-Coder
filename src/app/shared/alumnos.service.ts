import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlumnoSchema } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  constructor(private http: HttpClient){ }
  root_url = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/alumnos/'
  alumnoslist=<any>[];
  index=0;
  alumnoToEdit:any;
  alumnoToDelete:any;
  getAlumnosList():Observable<any> {
    return of(this.alumnoslist);
  }
  getAlumnoToEdit():Observable<any> {
    return of(this.alumnoToEdit);
  }
  getAlumnoToDelete():Observable<any> {
    return of(this.alumnoToDelete);
  }
  getActualIndex():Observable<any> {
    return of(this.index);
  }

  getApiStudentsList():Observable<AlumnoSchema[]> {
    return this.http.get<AlumnoSchema[]>(this.root_url)
  }
  detailApiSingleStudent(id:number):Observable<AlumnoSchema> {
    return this.http.get<AlumnoSchema>(this.root_url+id)
  }
  createApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.post<AlumnoSchema>(this.root_url, alumno)
  }
  updateApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.put<AlumnoSchema>(this.root_url+alumno.id, alumno)
  }
}
