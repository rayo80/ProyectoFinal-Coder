import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.scss']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private _usuariosService: UsuariosService,
  ) { }

  usuariosService = this._usuariosService;

  ngOnInit(): void {
  }

}
