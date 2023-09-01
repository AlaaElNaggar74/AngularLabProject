import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSkilComponent } from './child-skil.component';

describe('ChildSkilComponent', () => {
  let component: ChildSkilComponent;
  let fixture: ComponentFixture<ChildSkilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSkilComponent]
    });
    fixture = TestBed.createComponent(ChildSkilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
