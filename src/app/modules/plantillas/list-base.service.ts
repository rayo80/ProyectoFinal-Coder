import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export abstract class AbsListBaseService<IModel, Response> {
  abstract url: string;

  items: BehaviorSubject<IModel[]> = new BehaviorSubject<IModel[]>([]);
  //Mi base ya ejecuta acciones con HTTP
  constructor(private _http: HttpClient) { }


  abstract interfaceToModelAbstract(data: Response): IModel;

  // Pide la lista al servidor y actualiza 
  // nuestro subject items
  getList(): Observable<IModel[]> {
      return this._http.get<Response[]>(this.url).pipe(
          map(res =>
              res.map(item => this.interfaceToModelAbstract(item))
          ),
          tap((newres) => {
              this.items.next(newres);
          })
      );
  }


  createItem(data: IModel): Observable<IModel> {
      return this._http.post<Response>(this.url, data).pipe(
          map(res => this.interfaceToModelAbstract(res)),
          tap((res) => {
            this.items.next([...this.items.value,res]);
          })
      );
  }
  

}
