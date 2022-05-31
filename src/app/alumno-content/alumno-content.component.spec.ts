import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoContentComponent } from './alumno-content.component';

describe('AlumnoContentComponent', () => {
  let component: AlumnoContentComponent;
  let fixture: ComponentFixture<AlumnoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
