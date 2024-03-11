import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SelectItemInterface } from './select-interface';

@Injectable({
  providedIn: 'root'
})
export abstract class SelectBaseService<IModel, Response>{
  abstract url: string;
  items: BehaviorSubject<SelectItemInterface[]> = new BehaviorSubject<SelectItemInterface[]>([]);

  getApiList(): Observable<SelectItemInterface[]> {
    return this._http.get<SelectItemInterface[]>(this.url).pipe(
        tap((newres) => {
            this.items.next(newres);
        })
    );
  }
  constructor(private _http: HttpClient) { }
}
