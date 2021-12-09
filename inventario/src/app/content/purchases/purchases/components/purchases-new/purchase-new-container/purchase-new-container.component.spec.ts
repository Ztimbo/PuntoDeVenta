import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNewContainerComponent } from './purchase-new-container.component';

describe('PurchaseNewContainerComponent', () => {
  let component: PurchaseNewContainerComponent;
  let fixture: ComponentFixture<PurchaseNewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseNewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
