import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsDeleteComponent } from './brands-delete.component';

describe('BrandsDeleteComponent', () => {
  let component: BrandsDeleteComponent;
  let fixture: ComponentFixture<BrandsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
