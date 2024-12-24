import { TestBed } from '@angular/core/testing';

import { TestPoolsService } from './test-pools.service';

describe('TestPoolsService', () => {
  let service: TestPoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
