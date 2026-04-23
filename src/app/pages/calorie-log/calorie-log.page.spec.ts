import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalorieLogPage } from './calorie-log.page';

describe('CalorieLogPage', () => {
  let component: CalorieLogPage;
  let fixture: ComponentFixture<CalorieLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
