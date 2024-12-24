import { TestBed } from '@angular/core/testing';

import { NotauthenticatedHandlerService } from './notauthenticated-handler.service';

describe('NotauthenticatedHandlerService', () => {
  let service: NotauthenticatedHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotauthenticatedHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
