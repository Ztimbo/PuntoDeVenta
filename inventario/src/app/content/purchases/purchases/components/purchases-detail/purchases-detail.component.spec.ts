import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasesService } from '../../services/purchases.service';

import { PurchasesDetailComponent } from './purchases-detail.component';

describe('PurchasesDetailComponent', () => {
  let component: PurchasesDetailComponent;
  let fixture: ComponentFixture<PurchasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesDetailComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PurchasesService ]
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
