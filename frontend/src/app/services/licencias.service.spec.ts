import { TestBed } from '@angular/core/testing';

import { LicenciasService } from './licencias.service';

describe('LicenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenciasService = TestBed.get(LicenciasService);
    expect(service).toBeTruthy();
  });
});
