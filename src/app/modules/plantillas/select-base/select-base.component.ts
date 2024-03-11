import { ListBaseModule } from './../list-base/list-base.module';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SelectBaseService } from './select-base.service';
import { SelectItemInterface } from './select-interface';
import { AbsListBaseService } from '../list-base.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-select-base',
  templateUrl: './select-base.component.html',
  styleUrls: ['./select-base.component.scss']
})
export class SelectBaseComponent<IModel extends SelectItemInterface, Response> implements OnInit {

  @Input() service: AbsListBaseService<IModel, Response>;
  @Input() form: FormGroup
  @Input() formName = "name"
  @Input() label = ""
  @Input() required = false
  hasDetroyed$ = new Subject<boolean>();
  items$: Observable<IModel[]>
  items: any


  getItems(){
    this.service.getListCache()
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe(
        (val)=>this.items=val
    )
  }

  constructor() { }

  ngOnDestroy(): void {
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }

  ngOnInit(): void {
    this.getItems()
  }

}
