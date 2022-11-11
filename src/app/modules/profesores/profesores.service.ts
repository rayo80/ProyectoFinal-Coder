
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfesorSchema } from './profesor.interface';
import { BehaviorSubject, catchError, filter, map, Observable, of, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  constructor(private http: HttpClient){ }
  root_url = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/alumno/'
  profesoreslist = <ProfesorSchema[]>[];
  profesorToEdit: ProfesorSchema | null;
  profesorToDelete: any;

  getProfesorToEdit():Observable<any> {
    return of(this.profesorToEdit);
  }

  getProfesores():Observable<ProfesorSchema[]> {
    return this.http.get<ProfesorSchema[]>(this.root_url)
  }

  getSingleProfesor(id:number):Observable<ProfesorSchema> {
    return this.http.get<ProfesorSchema>(this.root_url+id)
  }

  createProfesor(profesor:ProfesorSchema){
    this.http.post<ProfesorSchema>(this.root_url, profesor)
    .pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  updateProfesor(profesor:ProfesorSchema):Observable<ProfesorSchema>{
    return this.http.put<ProfesorSchema>(this.root_url+profesor.id, profesor)
  }

  deleteProfesor(profesor: ProfesorSchema):Observable<ProfesorSchema> {
    return this.http.delete<ProfesorSchema>(this.root_url+profesor.id)
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
