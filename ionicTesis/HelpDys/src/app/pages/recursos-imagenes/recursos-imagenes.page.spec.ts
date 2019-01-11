import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosImagenesPage } from './recursos-imagenes.page';

describe('RecursosImagenesPage', () => {
  let component: RecursosImagenesPage;
  let fixture: ComponentFixture<RecursosImagenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosImagenesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosImagenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
