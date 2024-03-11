import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbsListBaseService } from '../plantillas/list-base.service';
import { SvUserSchema, UserModel } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends AbsListBaseService<UserModel, SvUserSchema>{
  url = environment.url+'/api/usuarios/usuarios'


  constructor(_http: HttpClient) {
    super(_http)
  }


  interfaceToModelAbstract(data: SvUserSchema): UserModel {
    return new UserModel(data)
  }


}
