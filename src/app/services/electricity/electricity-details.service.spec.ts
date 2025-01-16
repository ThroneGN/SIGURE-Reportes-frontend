import { TestBed } from '@angular/core/testing';

import { ElectricityDetailsService } from './electricity-details.service';

describe('ElectricityDetailsService', () => {
  let service: ElectricityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
