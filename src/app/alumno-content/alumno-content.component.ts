import { Component, OnInit } from '@angular/core';

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
  }

}
