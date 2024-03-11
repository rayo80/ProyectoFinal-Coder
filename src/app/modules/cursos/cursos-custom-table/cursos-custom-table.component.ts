import { CursoModel } from 'src/app/modules/cursos/curso.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { CursoSchema } from '../curso.interface';
import { CursosService } from '../curso.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';


@Component({
  selector: 'app-cursos-custom-table',
  templateUrl: './cursos-custom-table.component.html',
  styleUrls: ['./cursos-custom-table.component.scss']
})
export class CursosCustomTableComponent implements OnInit {
  items : CursoModel[]
  items$!: Observable<CursoModel[]>
  hasDetroyed$ = new Subject<boolean>();
  modal = CursosFormComponent

  sortedItems: CursoModel[]
  sortOption: string = 'id';


  constructor(
    private service: CursosService,
    private router: Router,
    public _dialog: MatDialog
  ) { 
  }

  openModal(){
    const dialogRef = this._dialog.open(this.modal,{
      autoFocus: false,
    });
    
    dialogRef.afterClosed()
    .pipe(
      takeUntil(this.hasDetroyed$),
      switchMap(() => {return this.service.items})
    )
    .subscribe((data) =>{
      this.items = data;
      this.sortedItems = this.sortItems(this.items,'id');
    })
  }

  getAPIItems(){
    // this.items$ = this.service.getList(); not works with modals
    this.service.getList()
    .pipe(
      takeUntil(this.hasDetroyed$),
      )
    .subscribe(
      (val)=>{
        this.items=val;
        this.sortedItems = this.sortItems(this.items,'id');
      }
    )
  }



  

  sortItems(data:CursoModel[], property: string) {
      return data.slice().sort((a, b) => a[property] < b[property] ? -1 : 1);
  }


  ngOnInit(): void {
    this.getAPIItems();
  }


  onDelete(item: CursoModel){
    this.service.deleteItem(item);
  }

  onUpdate(data: CursoModel){
    this.service.oneItem.next(data);
    this.openModal()
  }

  onCreate(){
    this.service.oneItem.next(null);
    this.openModal()
  }
}
