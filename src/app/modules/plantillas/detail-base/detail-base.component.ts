import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlumnosService } from '../../alumnos/alumnos.service';
import { UserSchema } from '../../usuarios/user.interface';
import { AbsListBaseService } from '../list-base.service';
import { ModelId } from '../list-base/list-base.types';

@Component({
  selector: 'app-detail-base',
  templateUrl: './detail-base.component.html',
  styleUrls: ['./detail-base.component.scss']
})
export class DetailBaseComponent<IModel extends ModelId, Response> 
{

  @Input() service: AbsListBaseService<IModel, Response>;
  @Input() baseUrl: string;
  single$: Observable<IModel>;
  item : any
  hasDetroyed$ = new Subject<boolean>();

  constructor(
    private activateRoute: ActivatedRoute, private router: Router,
  ) { }


  getSingleItem(id: string){
    //como item almacenara nuestro detalle y no conocemos su esquema
    //pues se asiganara lo mandamos any
    this.service.getItem(id)
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.item=val
    )
  }


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      //let id = parseInt(parametros.get('id') || '0');
      let id = parametros.get('id') || '0'
      this.getSingleItem(id);
    })
  }

  regresar(){
    this.router.navigate([this.baseUrl]);
  }

  ngOnDestroy(): void {
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }
}
