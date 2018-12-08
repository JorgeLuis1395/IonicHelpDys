import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProfesorPage } from './registro-profesor.page';

describe('RegistroProfesorPage', () => {
  let component: RegistroProfesorPage;
  let fixture: ComponentFixture<RegistroProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProfesorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
