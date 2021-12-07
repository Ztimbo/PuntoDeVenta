import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsEditComponent } from './presentations-edit.component';

describe('PresentationsEditComponent', () => {
  let component: PresentationsEditComponent;
  let fixture: ComponentFixture<PresentationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
