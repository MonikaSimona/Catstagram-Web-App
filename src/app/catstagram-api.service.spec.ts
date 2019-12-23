import { TestBed } from '@angular/core/testing';

import { CatstagramApiService } from './catstagram-api.service';

describe('CatstagramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatstagramApiService = TestBed.get(CatstagramApiService);
    expect(service).toBeTruthy();
  });
});
