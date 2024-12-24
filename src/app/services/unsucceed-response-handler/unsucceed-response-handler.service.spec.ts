import { TestBed } from '@angular/core/testing';

import { UnsucceedResponseHandlerService } from './unsucceed-response-handler.service';

describe('UnsucceedResponseHandlerService', () => {
  let service: UnsucceedResponseHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsucceedResponseHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
