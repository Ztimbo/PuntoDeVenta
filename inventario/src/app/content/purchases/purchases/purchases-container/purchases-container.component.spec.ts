import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesContainerComponent } from './purchases-container.component';

describe('PurchasesContainerComponent', () => {
  let component: PurchasesContainerComponent;
  let fixture: ComponentFixture<PurchasesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
