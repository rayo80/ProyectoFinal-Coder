import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CursoSchema } from '../../models/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url_root = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/curso/'
  cursoslist=<any>[];
  cursoToEdit:any;
  constructor(private http: HttpClient) { }
  getCursosList():Observable<CursoSchema[]>{
    return this.http.get<CursoSchema[]>(this.url_root)
  }
  getCursoToEdit():Observable<any> {
    return of(this.cursoToEdit);
  }
  createCurso(curso: CursoSchema):Observable<CursoSchema> {
    return this.http.post<CursoSchema>(this.url_root, curso)
  }
  updateCurso(curso: CursoSchema):Observable<CursoSchema> {
    return this.http.put<CursoSchema>(this.url_root+curso.id, curso)
  }
  deleteCurso(curso: CursoSchema):Observable<CursoSchema> {
    return this.http.delete<CursoSchema>(this.url_root+curso.id)
  }
}
