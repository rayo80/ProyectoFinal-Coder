import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { ModelId } from './list-base/list-base.types';

@Injectable({
  providedIn: 'root'
})

export abstract class AbsListBaseService<IModel extends ModelId, Response> {
  abstract url: string;

  items: BehaviorSubject<IModel[]> = new BehaviorSubject<IModel[]>([]);
  oneItem: BehaviorSubject<IModel | null> = new BehaviorSubject(null);
  private _itemsCache$: Observable<IModel[]>
  
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


  getListCache(): Observable<IModel[]> {
    console.log(this._itemsCache$)
    if (!this._itemsCache$) {
      this._itemsCache$ = this.getList().pipe(shareReplay(1));
    }
    return this._itemsCache$
  }

  createItem(data: IModel): Observable<IModel> {
    return this._http.post<Response>(this.url, data).pipe(
        map(res => this.interfaceToModelAbstract(res)),
        tap((res) => {
          this.items.next([...this.items.value, res]);
        })
    );
  }
  
  editItem(data: IModel): Observable<IModel> {
    console.log(data)
    return this._http.put<Response>(this.url + '/' + data.id, data)
      .pipe(
        map(res => this.interfaceToModelAbstract(res)),
        tap((res) => {
          const prevAlums = this.items.value.filter(a=>a.id != data.id);
          this.items.next([res, ...prevAlums]);
        })
    );
  }

  deleteItem(data: IModel):Observable<IModel> {
    return this._http.delete<IModel>(this.url + '/' + data.id)
      .pipe(
        tap(()=>{
          const newAlum = this.items.value.filter(a=>a.id != data.id);
          this.items.next(newAlum)
        })
      )
  }


  //get single Item
  getItem(id: string): Observable<IModel> {
    return this._http.get<Response>(this.url + id).pipe(
        map(res => this.interfaceToModelAbstract(res)),
        tap((newres) => {
           this.oneItem.next(newres);
        })
    );
  }

}
