import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { InscripcionesService } from '../shared/services/inscripciones.service';
import { InscripcionesFormComponent } from './inscripciones-form/inscripciones-form.component';
import { InscripcionesTableComponent } from './inscripciones-table/inscripciones-table.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  constructor(public dialog: MatDialog,
              private inscripcionesService: InscripcionesService) { }
  @ViewChild(InscripcionesTableComponent) inscripcionesTable: InscripcionesTableComponent;
  ngOnInit(): void {
  }

  openModal(): void {
    let dialogRef = this.dialog.open(InscripcionesFormComponent, 
      { disableClose: false });

    dialogRef.afterClosed().subscribe((result) => {
      this.inscripcionesTable.refreshTable();
    });
  }

  openModalCreate(): void {
    this.inscripcionesService.inscripcionToEdit=null;
    this.openModal()
  }

  openModalEdit(data: any): void {
    this.openModal()
  }
}
