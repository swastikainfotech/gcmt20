import { TestBed } from '@angular/core/testing';

import { GcmserviceService } from './gcmservice.service';

describe('GcmserviceService', () => {
  let service: GcmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
