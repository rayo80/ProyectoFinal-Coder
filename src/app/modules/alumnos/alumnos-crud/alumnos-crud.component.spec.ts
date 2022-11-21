import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCrudComponent } from './alumnos-crud.component';

describe('AlumnosCrudComponent', () => {
  let component: AlumnosCrudComponent;
  let fixture: ComponentFixture<AlumnosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
