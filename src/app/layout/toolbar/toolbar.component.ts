import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  nombreUsuario: string =""
  ngOnInit(): void {
    this.nombreUsuario = sessionStorage.getItem('usuario') || "";
  }
  

}
