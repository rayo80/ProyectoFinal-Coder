
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfesorModel, ProfesorSchema } from './profesor.interface';
import { BehaviorSubject, catchError, filter, map, Observable, of, Subject, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AbsListBaseService } from '../plantillas/list-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService extends AbsListBaseService<ProfesorModel, ProfesorSchema>{
  url = environment.url+'/api/matricula/profesor'

  constructor(_http: HttpClient) {
    super(_http)
  }

  interfaceToModelAbstract(data: ProfesorSchema): ProfesorModel {
    return new ProfesorModel(data)
  }



}
