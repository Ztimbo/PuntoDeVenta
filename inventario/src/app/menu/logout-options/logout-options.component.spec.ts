import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutOptionsComponent } from './logout-options.component';

describe('LogoutOptionsComponent', () => {
  let component: LogoutOptionsComponent;
  let fixture: ComponentFixture<LogoutOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
