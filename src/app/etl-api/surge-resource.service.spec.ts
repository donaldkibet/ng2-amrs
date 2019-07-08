import { TestBed, inject } from '@angular/core/testing';

import { SurgeResourceService } from './surge-resource.service';

describe('SurgeResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurgeResourceService]
    });
  });

  it('should be created', inject([SurgeResourceService], (service: SurgeResourceService) => {
    expect(service).toBeTruthy();
  }));
});
