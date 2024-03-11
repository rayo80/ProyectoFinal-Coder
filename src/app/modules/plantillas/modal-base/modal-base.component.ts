import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AbsListBaseService } from '../list-base.service';
import { ModelId } from '../list-base/list-base.types';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss']
})
export class ModalBaseComponent<IModel extends ModelId, Response> 
  implements OnInit 
{

  @Input() title: string
  @Input() service: AbsListBaseService<IModel, Response>;
  @Input() modalForm: FormGroup;
  hasDetroyed$ = new Subject<boolean>();
  
  constructor(
    private fbuild: FormBuilder,
    public matDialogRef: MatDialogRef<ModalBaseComponent<IModel, Response>>) 
  { }

  cursoToEdit: IModel

  getCursoEdit(){
    this.service.oneItem.subscribe(
      val=>this.cursoToEdit = val
  )}

  ngOnInit(): void {
  }

  onCreate(data: IModel){
    this.service.createItem(data)
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe()
  }

  onUpdate(data: IModel){
    this.service.editItem(data)
      .pipe(takeUntil(this.hasDetroyed$))
      .subscribe()
  }

  close(){
    this.matDialogRef.close()
  }

  save_close(){
   
    if((this.modalForm.status != 'INVALID')){
        if(!this.service.oneItem.getValue()){
          this.onCreate(this.modalForm.value)
        }else{
          console.log(this.modalForm.value)
          this.modalForm.value['id'] = this.service.oneItem.getValue().id;
          this.onUpdate(this.modalForm.value);
          this.service.oneItem.next(null);
        }        
      }
    else{
        alert('el formulario es invalido')
    }  
    this.close();
  }

  ngOnDestroy(): void {
    this.hasDetroyed$.next(true);
    this.hasDetroyed$.complete();
  }

}
