import { Component, OnInit } from '@angular/core';
import { AlumnoSchema } from '../alumnos-table/alumno.interface';

@Component({
  selector: 'app-alumno-content',
  templateUrl: './alumno-content.component.html',
  styleUrls: ['./alumno-content.component.scss']
})
export class AlumnoContentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  data:any=[];
  dataenviada = false;
  alumnoToEdit:AlumnoSchema|null; //esto es lo que enviamos al form cuando lo trataremos de editar
  
  contID=0;//cada vez que se de click a agregar data se le asignara un id
  onItemAdd(e:any){
    /*se rescribe la data*/
    this.contID=this.contID+1

    e['id']=this.contID;
    this.data.push(e);

    console.log(this.data)
    //se envio la data entonces muestra la tabla
    this.dataenviada=true;
  }

  onItemEdit(e:any){
    let index=this.data.findIndex((x:AlumnoSchema)=>x.id===e.id);
    this.data[index]=e;
    this.dataenviada=true;
  }

  onPassEdit(e:any){
    this.dataenviada=false;
    this.alumnoToEdit=e;
  }

  onPassDelete(el:any){
    /*acaba de pasar una eliminacion entonces la longitud
    de la data afectara los ids que se iban agregando.
    aca recibiremos toda la lista de alumnos que se modifico en table
    */
    console.log(this.data)
    //nuestra data actual no tiene id
 
    /*PODRIA IMPLEMENTAR LO DE LA CLASE PERO 
    NO DESEO QUE SE REESCRIBAN LOS IDS YA QUE ESO ES PROPIO DE LA
    DATA QUE VIENE DEL BACK*/
    
  }

  onClickAdd(){
    /*Pasa al formulario y además elimina la data enviada a editar como 
    nulo porque sino el formulario tendria data que apareceria en el form*/
    this.dataenviada=false;
    this.alumnoToEdit=null;
  }
}
