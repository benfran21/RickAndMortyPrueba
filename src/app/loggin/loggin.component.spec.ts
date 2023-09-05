import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logginComponent } from './loggin.component';

describe('logginComponent', () => {
  let component: logginComponent;
  let fixture: ComponentFixture<logginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [logginComponent]
    });
    fixture = TestBed.createComponent(logginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
