import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercixio02Component } from './exercixio02.component';

describe('Exercixio02Component', () => {
  let component: Exercixio02Component;
  let fixture: ComponentFixture<Exercixio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercixio02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercixio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
