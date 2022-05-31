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

  onItemAdd(e:any){
    /*se rescribe la data*/
    console.log(e)
    let index=1;
    if(this.data.length>0){
      index=this.data.length+1;
      e['id']=index;
      this.data.push(e);
    }else{
      console.log(this.data)
      e['id']=index;
      this.data.push(e)
    }
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
    modificaremos el index*/
    this.data=el;
    console.log(el)
  }

  onClickAdd(){
    /*Pasa al formulario y además elimina la data enviada a editar como 
    nulo porque sino el formulario tendria data que apareceria en el form*/
    this.dataenviada=false;
    this.alumnoToEdit=null;
  }
}
