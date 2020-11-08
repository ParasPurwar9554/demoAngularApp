import { TestBed } from '@angular/core/testing';

import { HomecategoryService } from './homecategory.service';

describe('HomecategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomecategoryService = TestBed.get(HomecategoryService);
    expect(service).toBeTruthy();
  });
});
