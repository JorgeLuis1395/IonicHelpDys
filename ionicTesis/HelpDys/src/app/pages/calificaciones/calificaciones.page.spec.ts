import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesPage } from './calificaciones.page';

describe('CalificacionesPage', () => {
  let component: CalificacionesPage;
  let fixture: ComponentFixture<CalificacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
