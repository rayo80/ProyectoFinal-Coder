import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-inicio',
  templateUrl: './profesor-inicio.component.html',
  styleUrls: ['./profesor-inicio.component.scss']
})
export class ProfesorInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
