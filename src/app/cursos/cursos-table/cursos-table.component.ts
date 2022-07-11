import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'src/app/shared/services/cursos.service';
import { CursoSchema } from '../../models/curso.interface';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss']
})
export class CursosTableComponent implements OnInit, AfterViewInit {
  constructor(private cursosService: CursosService) { }
  //variables para leer los servicios
  cursos: CursoSchema[];
  //ocultar la pestaña
  @Output() OcultarTabla= new EventEmitter<any>();
  //variables para tabla
  displayedColumns: string[] = ['id', 'name', 'codigo', 'horario', 'profesor', 'editar','eliminar'];
  @ViewChild(MatTable) table: MatTable<CursoSchema>;
  dataSource = new MatTableDataSource<CursoSchema>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //FUNCIONES QUE NOS CONECTAN CON EL SERVICIO
  getCursos(){
    this.cursosService.getCursosList().subscribe(
      (val)=>{
        //uno es un simple array que renderiza la tabla
        // y el segundo es un objeto al que le podemos aplicar
        // paginaciones en el modulo Alumnos ya no hago esta separacion.
        this.cursos=val;
        this.dataSource.data=this.cursos;
      }
    )
  }
  deleteCurso(elemento:CursoSchema){
    this.cursosService.deleteCurso(elemento).subscribe(
      val=>{
        this.getCursos();
      }
    )
  }

  ngOnInit(): void {
    this.getCursos();
  }

  onUpdate(elemento:CursoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.cursosService.cursoToEdit=elemento;
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }

  onDelete(elemento:CursoSchema){
    this.deleteCurso(elemento);
  }

  onAdd() {
    //al hacer click ocultamos nuestra tabla y mostramos solo el formulario
    this.OcultarTabla.emit(true);
  }
}
