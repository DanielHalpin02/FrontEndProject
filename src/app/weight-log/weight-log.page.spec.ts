import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightLogPage } from './weight-log.page';

describe('WeightLogPage', () => {
  let component: WeightLogPage;
  let fixture: ComponentFixture<WeightLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
