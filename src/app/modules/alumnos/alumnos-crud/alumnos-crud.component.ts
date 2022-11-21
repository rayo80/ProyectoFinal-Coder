import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-crud',
  templateUrl: './alumnos-crud.component.html',
  styleUrls: ['./alumnos-crud.component.scss']
})
export class AlumnosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
