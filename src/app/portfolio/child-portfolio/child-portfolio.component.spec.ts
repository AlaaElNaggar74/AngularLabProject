import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPortfolioComponent } from './child-portfolio.component';

describe('ChildPortfolioComponent', () => {
  let component: ChildPortfolioComponent;
  let fixture: ComponentFixture<ChildPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPortfolioComponent]
    });
    fixture = TestBed.createComponent(ChildPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
