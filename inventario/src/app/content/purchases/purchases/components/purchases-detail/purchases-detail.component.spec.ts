import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesDetailComponent } from './purchases-detail.component';

describe('PurchasesDetailComponent', () => {
  let component: PurchasesDetailComponent;
  let fixture: ComponentFixture<PurchasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
