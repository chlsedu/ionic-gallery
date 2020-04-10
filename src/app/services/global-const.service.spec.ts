import { TestBed } from '@angular/core/testing';

import { GlobalConstService } from './global-const.service';

describe('GlobalConstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalConstService = TestBed.get(GlobalConstService);
    expect(service).toBeTruthy();
  });
});
