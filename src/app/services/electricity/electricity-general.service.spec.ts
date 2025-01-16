import { TestBed } from '@angular/core/testing';

import { ElectricityGeneralService } from './electricity-general.service';

describe('ElectricityGeneralService', () => {
  let service: ElectricityGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
