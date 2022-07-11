import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InscripcionGETSchema, InscripcionSchema } from '../../models/inscripciones.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  url_root = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/inscripciones/'
  constructor(private http: HttpClient) { }
  inscripcionToEdit:any;
  getInscripcionToEdit():Observable<InscripcionSchema>{
    return of(this.inscripcionToEdit);
  }
  getInscripcionesList():Observable<InscripcionGETSchema[]> {
    return this.http.get<InscripcionGETSchema[]>(this.url_root);
  }
  createInscripcion(inscripcion: InscripcionSchema):Observable<InscripcionSchema> {
    return this.http.post<InscripcionSchema>(this.url_root, inscripcion)
  }
  updateInscripcion(inscripcion: InscripcionSchema):Observable<InscripcionSchema> {
    console.log(inscripcion);
    return this.http.put<InscripcionSchema>(this.url_root+inscripcion.id, inscripcion)
  }
  deleteInscripcion(inscripcion: InscripcionSchema):Observable<InscripcionSchema> {
    return this.http.delete<InscripcionSchema>(this.url_root+inscripcion.id)
  }
}
