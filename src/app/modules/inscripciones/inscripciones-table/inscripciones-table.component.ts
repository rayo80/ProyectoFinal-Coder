import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InscripcionGETSchema, InscripcionSchema } from 'src/app/modules/inscripciones/inscripciones.interface';
import { InscripcionesService } from '../inscripciones.service';


@Component({
  selector: 'app-inscripciones-table',
  templateUrl: './inscripciones-table.component.html',
  styleUrls: ['./inscripciones-table.component.scss']
})
export class InscripcionesTableComponent implements OnInit {

  constructor(private inscripcionesService: InscripcionesService) { }
  //salida que indica que se abre el modal
  @Output() openForm: EventEmitter<boolean> = new EventEmitter();

  //objeto material-angular para cargar lista con paginacion
  inscripciones = new MatTableDataSource<InscripcionGETSchema>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<InscripcionGETSchema>;
  displayedColumns=['id','codigo','alumno','curso','fecha','editar','eliminar'];

  ngOnInit(): void {
    this.getInscripcionesList();
  }

  ngAfterViewInit() {
    this.inscripciones.paginator = this.paginator;
  }

  deleteInscripcion(elemento:InscripcionSchema){
    this.inscripcionesService.deleteInscripcion(elemento).subscribe(
      val=>{
        this.getInscripcionesList();
      }
    )
  }

  getInscripcionesList(){
    this.inscripcionesService.getInscripcionesList().subscribe(
      (val) => {this.inscripciones.data = val}
    )
  }

  onUpdate(elemento:InscripcionGETSchema){
    //el elemnto tiene campos realcionados en json
    //con id y nombre para poder conocer la data
    //ahora para editar lo enviamos al form para representarlo
    this.inscripcionesService.inscripcionToEdit = elemento;
    this.openForm.emit(true);
  }
  
  onDelete(elemento:InscripcionSchema){
    this.deleteInscripcion(elemento);
  }

  refreshTable(){
    this.getInscripcionesList();
  }
}
