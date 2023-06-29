import { TestBed } from '@angular/core/testing';

import { ServicescomentariosService } from './servicescomentarios.service';

describe('ServicescomentariosService', () => {
  let service: ServicescomentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicescomentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
