import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsJuegosPage } from './tabs-juegos.page';

describe('TabsJuegosPage', () => {
  let component: TabsJuegosPage;
  let fixture: ComponentFixture<TabsJuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsJuegosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
