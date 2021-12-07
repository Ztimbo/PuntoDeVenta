import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersContainerComponent } from './providers-container.component';

describe('ProvidersContainerComponent', () => {
  let component: ProvidersContainerComponent;
  let fixture: ComponentFixture<ProvidersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
