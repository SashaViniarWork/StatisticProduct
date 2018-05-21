import { TestBed, inject } from '@angular/core/testing';

import { ConstValService } from './const-val.service';

describe('ConstValService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstValService]
    });
  });

  it('should be created', inject([ConstValService], (service: ConstValService) => {
    expect(service).toBeTruthy();
  }));
});
