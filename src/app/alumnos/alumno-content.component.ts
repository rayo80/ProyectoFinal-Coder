import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoSchema } from '../models/alumno.interface';
import { AlumnosService } from './alumnos.service';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';

@Component({
  selector: 'app-alumno-content',
  templateUrl: './alumno-content.component.html',
  styleUrls: ['./alumno-content.component.scss']
})
export class AlumnoContentComponent implements OnInit {
  constructor(public dialog: MatDialog, private alumnoService: AlumnosService) { }
  @ViewChild(AlumnosTableComponent) alumnoTable: AlumnosTableComponent;

  ngOnInit(): void {
  }

  alumnoToEdit:AlumnoSchema|null; //esto es lo que enviamos al form cuando lo trataremos de editar
  

  //el formulario envia un valor, hora de ocultarlo
  openModal(): void {
    let dialogRef = this.dialog.open(AlumnosFormComponent, 
      { disableClose: false });

    dialogRef.afterClosed().subscribe((result) => {
      this.alumnoTable.refreshTable();
    });
  }

  openModalCreate(): void {
    this.alumnoService.alumnoToEdit=null;
    this.openModal()
  }

  openModalEdit(data: any): void {
    this.openModal()
  }
  /*
  getStudent(data: any): void {
    this.alumnoService.getSingleStudent(data).subscribe(
      (val) => {
        this.alumnoToEdit = val;}
    )}*/
}
