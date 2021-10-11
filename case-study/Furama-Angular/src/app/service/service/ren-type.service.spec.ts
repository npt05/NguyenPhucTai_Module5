import { TestBed } from '@angular/core/testing';

import { RenTypeService } from './ren-type.service';

describe('RenTypeService', () => {
  let service: RenTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
