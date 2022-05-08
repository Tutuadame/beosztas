import { TestBed } from '@angular/core/testing';

import { CouldworkService } from './couldwork.service';

describe('CouldworkService', () => {
  let service: CouldworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouldworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
