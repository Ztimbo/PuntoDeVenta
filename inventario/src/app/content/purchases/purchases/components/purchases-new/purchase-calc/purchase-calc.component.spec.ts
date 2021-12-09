import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCalcComponent } from './purchase-calc.component';

describe('PurchaseCalcComponent', () => {
  let component: PurchaseCalcComponent;
  let fixture: ComponentFixture<PurchaseCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
