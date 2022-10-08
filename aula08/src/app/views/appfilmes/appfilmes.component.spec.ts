import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfilmesComponent } from './appfilmes.component';

describe('AppfilmesComponent', () => {
  let component: AppfilmesComponent;
  let fixture: ComponentFixture<AppfilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppfilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppfilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
