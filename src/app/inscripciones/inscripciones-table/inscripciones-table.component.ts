import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionGETSchema } from 'src/app/models/inscripciones.interface';
import { InscripcionesService } from 'src/app/shared/inscripciones.service';

@Component({
  selector: 'app-inscripciones-table',
  templateUrl: './inscripciones-table.component.html',
  styleUrls: ['./inscripciones-table.component.scss']
})
export class InscripcionesTableComponent implements OnInit {

  constructor(private inscripcionesService: InscripcionesService) { }
  //variables para leer los servicios
  @Output() openform: EventEmitter<boolean> = new EventEmitter();
  //objeto material-angular para cargar lista con paginacion
  paginator: MatPaginator[];
  inscripciones = new MatTableDataSource<InscripcionGETSchema>();

  getInscripcionesList(){
    this.inscripcionesService.getInscripcionesList().subscribe(
      (val) => {this.inscripciones.data = val;}
    )
  }
  ngOnInit(): void {
    this.getInscripcionesList();
  }
  displayedColumns=['id','codigo','alumno','curso','fecha','editar','eliminar'];


  onUpdate(elemento:any){
    this.inscripcionesService.inscripcionToEdit=elemento;
    this.openform.emit(true);
  }
  onDelete(elemento:any){
    console.log("delete");
  }

}
