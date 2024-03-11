import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCustomTableComponent } from './cursos-custom-table.component';

describe('CursosCustomTableComponent', () => {
  let component: CursosCustomTableComponent;
  let fixture: ComponentFixture<CursosCustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCustomTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
