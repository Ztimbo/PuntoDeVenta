import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { PresentationsDeleteComponent } from './presentations-delete.component';

describe('PresentationsDeleteComponent', () => {
  let component: PresentationsDeleteComponent;
  let fixture: ComponentFixture<PresentationsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationsDeleteComponent ],
      imports: [ MatDialogModule ],
      providers: [ MatDialogRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
