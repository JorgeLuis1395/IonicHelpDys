import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicios1Page } from './servicios1.page';

describe('Servicios1Page', () => {
  let component: Servicios1Page;
  let fixture: ComponentFixture<Servicios1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicios1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicios1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
