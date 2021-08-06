import { TestBed } from '@angular/core/testing';

import { ObservableTestService } from './observable-test.service';

describe('ObservableTestService', () => {
  let service: ObservableTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
