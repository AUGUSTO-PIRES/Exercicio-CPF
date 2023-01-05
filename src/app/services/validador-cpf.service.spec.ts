import { TestBed } from '@angular/core/testing';

import { ValidadorCpfService } from './validador-cpf.service';

describe('ValidadorCpfService', () => {
  let service: ValidadorCpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorCpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
