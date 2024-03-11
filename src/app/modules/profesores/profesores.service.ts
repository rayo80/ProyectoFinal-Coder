
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfesorSchema } from './profesor.interface';
import { BehaviorSubject, catchError, filter, map, Observable, of, Subject, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  constructor(private http: HttpClient){ }
  url = environment.url+'/api/matricula/profesor'
  profesoreslist = <ProfesorSchema[]>[];
  profesorToEdit: ProfesorSchema | null;
  profesorToDelete: any;

  getProfesorToEdit():Observable<any> {
    return of(this.profesorToEdit);
  }

  getProfesores():Observable<ProfesorSchema[]> {
    return this.http.get<ProfesorSchema[]>(this.url)
  }

  getSingleProfesor(id:number):Observable<ProfesorSchema> {
    return this.http.get<ProfesorSchema>(this.url+'/'+id)
  }

  createProfesor(profesor:ProfesorSchema){
    this.http.post<ProfesorSchema>(this.url, profesor)
    .pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  updateProfesor(profesor:ProfesorSchema){
    this.http.put<ProfesorSchema>(this.url+'/'+profesor.id, profesor).subscribe()
  }

  deleteProfesor(profesor: ProfesorSchema){
    this.http.delete<ProfesorSchema>(this.url+'/'+profesor.id).subscribe()
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
