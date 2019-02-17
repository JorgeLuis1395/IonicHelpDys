import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Memoria1Page } from './memoria1.page';

describe('Memoria1Page', () => {
  let component: Memoria1Page;
  let fixture: ComponentFixture<Memoria1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Memoria1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Memoria1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
