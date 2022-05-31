import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPorfolioComponent } from './proyectos-porfolio.component';

describe('ProyectosPorfolioComponent', () => {
  let component: ProyectosPorfolioComponent;
  let fixture: ComponentFixture<ProyectosPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
