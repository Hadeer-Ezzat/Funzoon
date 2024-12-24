import { TestBed } from '@angular/core/testing';

import { NotfoundHandlerService } from './notfound-handler.service';

describe('NotfoundHandlerService', () => {
  let service: NotfoundHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotfoundHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
