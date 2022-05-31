import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePorfolioComponent } from './acerca-de-porfolio.component';

describe('AcercaDePorfolioComponent', () => {
  let component: AcercaDePorfolioComponent;
  let fixture: ComponentFixture<AcercaDePorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDePorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDePorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
