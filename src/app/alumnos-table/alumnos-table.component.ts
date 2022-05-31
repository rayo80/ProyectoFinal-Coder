import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AlumnoSchema } from './user.interface'

const ELEMENT_DATA: AlumnoSchema[] = [
];

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() alumnos: AlumnoSchema[]; //se recibe data
  displayedColumns: string[] = ['id', 'name', 'edad', 'email','apellido'];
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;

  refresh(){
    this.table.renderRows();
  }

}
