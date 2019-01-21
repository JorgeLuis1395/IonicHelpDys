import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContenidoPage } from './tabs-contenido.page';

describe('TabsContenidoPage', () => {
  let component: TabsContenidoPage;
  let fixture: ComponentFixture<TabsContenidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsContenidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
