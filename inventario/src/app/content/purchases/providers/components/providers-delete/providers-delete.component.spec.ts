import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersDeleteComponent } from './providers-delete.component';

describe('ProvidersDeleteComponent', () => {
  let component: ProvidersDeleteComponent;
  let fixture: ComponentFixture<ProvidersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
