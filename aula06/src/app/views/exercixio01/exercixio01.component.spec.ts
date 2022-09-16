import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercixio01Component } from './exercixio01.component';

describe('Exercixio01Component', () => {
  let component: Exercixio01Component;
  let fixture: ComponentFixture<Exercixio01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercixio01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercixio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
