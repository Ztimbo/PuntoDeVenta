import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsNewComponent } from './presentations-new.component';

describe('PresentationsNewComponent', () => {
  let component: PresentationsNewComponent;
  let fixture: ComponentFixture<PresentationsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
