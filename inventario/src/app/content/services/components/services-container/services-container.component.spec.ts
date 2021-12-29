import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContainerComponent } from './services-container.component';

describe('ServicesContainerComponent', () => {
  let component: ServicesContainerComponent;
  let fixture: ComponentFixture<ServicesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
