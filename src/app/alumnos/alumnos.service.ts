import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlumnoSchema } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  constructor(private http: HttpClient){ }
  root_url = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/alumno/'
  alumnoslist=<any>[];
  index=0;
  alumnoToEdit:AlumnoSchema | null;
  alumnoToDelete:any;

  getStudentToEdit():Observable<any> {
    return of(this.alumnoToEdit);
  }

  getApiStudentsList():Observable<AlumnoSchema[]> {
    return this.http.get<AlumnoSchema[]>(this.root_url)
  }
  getSingleStudent(id:number):Observable<AlumnoSchema> {
    return this.http.get<AlumnoSchema>(this.root_url+id)
  }
  createApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.post<AlumnoSchema>(this.root_url, alumno)
  }
  updateApiStudent(alumno:AlumnoSchema):Observable<AlumnoSchema>{
    return this.http.put<AlumnoSchema>(this.root_url+alumno.id, alumno)
  }
  deleteStudent(curso: AlumnoSchema):Observable<AlumnoSchema> {
    return this.http.delete<AlumnoSchema>(this.root_url+curso.id)
  }
}
