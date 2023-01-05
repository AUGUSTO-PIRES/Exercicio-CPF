import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorCpfComponent } from './validador-cpf.component';

describe('ValidadorCpfComponent', () => {
  let component: ValidadorCpfComponent;
  let fixture: ComponentFixture<ValidadorCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidadorCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadorCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
