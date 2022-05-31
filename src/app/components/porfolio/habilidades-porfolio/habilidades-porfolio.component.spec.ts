import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesPorfolioComponent } from './habilidades-porfolio.component';

describe('HabilidadesPorfolioComponent', () => {
  let component: HabilidadesPorfolioComponent;
  let fixture: ComponentFixture<HabilidadesPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
