import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { AbsListBaseService } from '../list-base.service';
import { IListColums } from './list-base.types';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss']
})

export class ListBaseComponent<IModel, Response>
    implements OnInit, OnDestroy{
        // necesito que me manden el servicio que extendera de una clase abstracta
  // por lo que tendra los atributos que necesito
  @Input() service: AbsListBaseService<IModel, Response>;
  @Input() title: string;
  @Input() fieldsHeader: IListColums[];
  @Input() tableActions: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<IModel[]>;
  @ViewChild(MatSort) sort: MatSort;

  items = new MatTableDataSource<IModel>();
  hasDetroyed$ = new Subject<boolean>();

  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.service.getList().subscribe()
    this.getItems()
    this.asignarColumnas()
  }

  asignarColumnas(){
    this.displayedColumns = this.fieldsHeader.map(item=>item.name)
    this.displayedColumns = [...this.displayedColumns, ...this.tableActions]
  }


  getItems(){
    this.service.items
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.items.data=val
    )
  }


  ngOnDestroy(): void {
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }

  ngAfterViewInit(){
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
  }

  onCreate(): void {
    console.log("createing")
  }
  onDetail(data: IModel){
    console.log("Detallando")
  }
  onUpdate(data: IModel){
    console.log("onUpdate")
  }
  onDelete(data: IModel){
    console.log("hola")
  }
}
