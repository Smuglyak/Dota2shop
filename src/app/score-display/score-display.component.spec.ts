import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDisplayComponent } from './score-display.component';

describe('ScoreDisplayComponent', () => {
  let component: ScoreDisplayComponent;
  let fixture: ComponentFixture<ScoreDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreDisplayComponent]
    });
    fixture = TestBed.createComponent(ScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
