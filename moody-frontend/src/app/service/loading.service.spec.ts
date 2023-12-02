import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService]
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set loading value', () => {
    const testValue = true;
    service.setLoading(testValue);
    service.getLoading().subscribe((value) => {
      expect(value).toEqual(testValue);
    });
  });

  it('should get loading value', () => {
    const testValue = true;
    service.setLoading(testValue);
    const loadingValue = service.getLoading().getValue();
    expect(loadingValue).toEqual(testValue);
  });
});
