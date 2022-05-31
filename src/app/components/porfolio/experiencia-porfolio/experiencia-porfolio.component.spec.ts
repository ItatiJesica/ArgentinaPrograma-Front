import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPorfolioComponent } from './experiencia-porfolio.component';

describe('ExperienciaPorfolioComponent', () => {
  let component: ExperienciaPorfolioComponent;
  let fixture: ComponentFixture<ExperienciaPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
