import { TestBed } from '@angular/core/testing';

import { FulleventService } from './fullevent.service';

describe('FulleventService', () => {
  let service: FulleventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FulleventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
