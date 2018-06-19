import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsComponent } from './artefacts.component';

describe('ArtefactsComponent', () => {
  let component: ArtefactsComponent;
  let fixture: ComponentFixture<ArtefactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
