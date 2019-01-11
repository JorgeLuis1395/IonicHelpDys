import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosVideosPage } from './recursos-videos.page';

describe('RecursosVideosPage', () => {
  let component: RecursosVideosPage;
  let fixture: ComponentFixture<RecursosVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
