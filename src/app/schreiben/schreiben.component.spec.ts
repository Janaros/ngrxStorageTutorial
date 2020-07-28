import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchreibenComponent } from './schreiben.component';

describe('SchreibenComponent', () => {
  let component: SchreibenComponent;
  let fixture: ComponentFixture<SchreibenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchreibenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchreibenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
