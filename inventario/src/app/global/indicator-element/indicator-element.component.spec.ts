import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorElementComponent } from './indicator-element.component';

describe('IndicatorElementComponent', () => {
  let component: IndicatorElementComponent;
  let fixture: ComponentFixture<IndicatorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
