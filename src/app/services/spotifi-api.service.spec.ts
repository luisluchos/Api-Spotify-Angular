import { TestBed } from '@angular/core/testing';

import { SpotifiApiService } from './spotifi-api.service';

describe('SpotifiApiService', () => {
  let service: SpotifiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
