import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbsListBaseService } from '../plantillas/list-base.service';
import { SvUserSchema, UserModel } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends AbsListBaseService<UserModel, SvUserSchema>{
  url = "https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/alumno/"

  constructor(_http: HttpClient) {
    super(_http)
  }


  interfaceToModelAbstract(data: SvUserSchema): UserModel {
    return new UserModel(data)
  }

}
