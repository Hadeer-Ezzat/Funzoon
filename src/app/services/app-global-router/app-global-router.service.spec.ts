import { TestBed } from '@angular/core/testing';

import { AppGlobalRouterService } from './app-global-router.service';

describe('AppGlobalRouterService', () => {
  let service: AppGlobalRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppGlobalRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
