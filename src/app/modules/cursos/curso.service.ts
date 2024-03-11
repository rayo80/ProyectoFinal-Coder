import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, tap } from 'rxjs';
import { AbsListBaseService } from '../plantillas/list-base.service';
import { CursoModel, CursoSchema, SvCursoSchema } from './curso.interface';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends AbsListBaseService<CursoModel, SvCursoSchema>{
  url = environment.url+'/api/matricula/curso'

  constructor(_http: HttpClient) {
    super(_http)
  }


  interfaceToModelAbstract(data: SvCursoSchema): CursoModel {
    return new CursoModel(data)
  }

  sorteditems: BehaviorSubject<CursoModel[]> = new BehaviorSubject<CursoModel[]>([]);

  getSortedList(){
    console.log("ordenando")
    return this.getList().pipe(
      tap((items) => {
        this.sortItems(items, 'id')
        this.sorteditems.next(items);
      })
    )
    }

  sortItems(data:CursoModel[], property: string) {
    return data.slice().sort((a, b) => a[property] < b[property] ? -1 : 1);
  }

}
