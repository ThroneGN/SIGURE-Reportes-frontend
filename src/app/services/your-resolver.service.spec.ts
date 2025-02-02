import { TestBed } from '@angular/core/testing';

import { YourResolverService } from './your-resolver.service';

describe('YourResolverService', () => {
  let service: YourResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
