import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsContainerComponent } from './presentations-container.component';

describe('PresentationsContainerComponent', () => {
  let component: PresentationsContainerComponent;
  let fixture: ComponentFixture<PresentationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
