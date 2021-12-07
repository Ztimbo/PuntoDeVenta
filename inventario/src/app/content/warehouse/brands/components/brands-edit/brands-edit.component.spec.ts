import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsEditComponent } from './brands-edit.component';

describe('BrandsEditComponent', () => {
  let component: BrandsEditComponent;
  let fixture: ComponentFixture<BrandsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
