import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosCuentosPage } from './recursos-cuentos.page';

describe('RecursosCuentosPage', () => {
  let component: RecursosCuentosPage;
  let fixture: ComponentFixture<RecursosCuentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosCuentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosCuentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
