import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SvInscripcionSchema, InscripcionModel } from './inscripciones.interface';
import { environment } from './../../../environments/environment';
import { AbsListBaseService } from '../plantillas/list-base.service';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService extends AbsListBaseService<InscripcionModel, SvInscripcionSchema>{
  url = environment.url+'/api/matricula/inscripcion'


  constructor(_http: HttpClient) {
    super(_http)
  }


  interfaceToModelAbstract(data: SvInscripcionSchema): InscripcionModel {
    return new InscripcionModel(data)
  }
}
