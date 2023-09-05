import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCreadosComponent } from './usuarios-creados.component';

describe('UsuariosCreadosComponent', () => {
  let component: UsuariosCreadosComponent;
  let fixture: ComponentFixture<UsuariosCreadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosCreadosComponent]
    });
    fixture = TestBed.createComponent(UsuariosCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
