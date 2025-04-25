import { TestBed } from '@angular/core/testing';

import { MasterServeService } from './master-serve.service';

describe('MasterServeService', () => {
  let service: MasterServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
