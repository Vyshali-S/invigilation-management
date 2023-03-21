import { TestBed } from '@angular/core/testing';

import { StaffhomeService } from './staffhome.service';

describe('StaffhomeService', () => {
  let service: StaffhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
