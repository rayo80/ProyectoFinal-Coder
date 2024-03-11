import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { AbsListBaseService } from '../list-base.service';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { IListColums, ModelId } from './list-base.types';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss']
})

export class ListBaseComponent<IModel extends ModelId, Response>
    implements OnInit, OnDestroy{
  // necesito que me manden el servicio que extendera de una clase abstracta
  // por lo que tendra los atributos que necesito
  @Input() service: AbsListBaseService<IModel , Response>;
  @Input() title: string;
  @Input() fieldsHeader: IListColums[];
  @Input() tableActions: string[];
  @Input() detailUrl: string;
  @Input() modal: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<IModel[]>;
  @ViewChild(MatSort) sort: MatSort;


  items = new MatTableDataSource<IModel>();
  hasDetroyed$ = new Subject<boolean>();

  displayedColumns: string[] = [];


  constructor(public _dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.getAPIItems()
    this.asignarColumnas()
  }

  openModal(){
    if(this.modal != null){
      const dialogRef = this._dialog.open(this.modal,{
        autoFocus: false,
      });
      
      dialogRef.afterClosed()
      .pipe(
        takeUntil(this.hasDetroyed$),
        switchMap(() => {return this.service.items})
      )
      .subscribe((data) =>(this.items.data = data))
    }
    else{
      alert("Debe agregar un modal")
    }
  }
  

  asignarColumnas(){
    
    this.displayedColumns = this.fieldsHeader.map(item=>item.name)
    this.displayedColumns = [...this.displayedColumns, ...this.tableActions]
  }


  getAPIItems(){
    this.service.getList()
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.items.data=val
    )
  }

  getItems(){
    this.service.items
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.items.data=val
    )
  }

  ngOnDestroy(): void {
    console.log(this.items.data)
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }

  ngAfterViewInit(){
  
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
  }

  onCreate(): void {
    // le mandamos null al item de edicion
    console.log("aca falla one Item ya es null")
    this.service.oneItem.next(null);
    this.openModal()
  }

  onDetail(elemento: IModel){
    this.router.navigate([this.detailUrl, elemento.id]);
  }

  onUpdate(data: IModel){
    this.service.oneItem.next(data);
    this.openModal()
  }
  
  onDelete(data: IModel){

  }
}
