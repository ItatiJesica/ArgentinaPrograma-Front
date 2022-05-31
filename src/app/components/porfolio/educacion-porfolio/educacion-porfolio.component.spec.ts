import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionPorfolioComponent } from './educacion-porfolio.component';

describe('EducacionPorfolioComponent', () => {
  let component: EducacionPorfolioComponent;
  let fixture: ComponentFixture<EducacionPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
