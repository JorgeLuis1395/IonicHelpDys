import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosPage } from './cuentos.page';

describe('CuentosPage', () => {
  let component: CuentosPage;
  let fixture: ComponentFixture<CuentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
