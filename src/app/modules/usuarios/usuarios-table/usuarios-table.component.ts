import { IListColums } from './../../plantillas/list-base/list-base.types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.scss']
})
export class UsuariosTableComponent implements OnInit {

  constructor(
    private router: Router,
    private _usuariosService: UsuariosService,
  ) { }

  usuariosService = this._usuariosService;

  optionsColumns: string[] = ['Detalle'];


  // el campo code usualmente se saca de la data misma
  // cuando se pinta la data misma
  userColumns: IListColums[] =[
    { 
      'name': 'ID',
      'code': 'id',
    },
    {
      'name': 'Name',
      'code': 'name',
    },
    {      
      'name': 'Apellido',
      'code': 'apellidos',
    },
    {
      'name': 'Email',
      'code': 'email',
    },
    {
      'name': 'Edad',
      'code': 'edad',
    }
  ]

  ngOnInit(): void {

  }
  
}
