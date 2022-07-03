import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  @ViewChild('ModalComponent') modal: TemplateRef<any>;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    let dialogRef = this.dialog.open(this.modal, { disableClose: false });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  abre(value:boolean){
    if (value){
      this.openModal();
    }
  }
  guardar(){
    console.log("guardar");
  }

}
