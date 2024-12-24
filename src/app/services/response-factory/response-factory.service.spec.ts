import { TestBed } from '@angular/core/testing';

import { ResponseFactoryService } from './response-factory.service';

describe('ResponseFactoryService', () => {
  let service: ResponseFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
