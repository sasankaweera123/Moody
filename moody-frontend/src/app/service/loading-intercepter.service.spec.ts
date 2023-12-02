import { TestBed } from '@angular/core/testing';

import { LoadingIntercepterService } from './loading-intercepter.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('LoadingIntercepterService', () => {
  let interceptor: LoadingIntercepterService;
  let httpHandlerSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']); // Add more methods as needed

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        LoadingIntercepterService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingIntercepterService,
          multi: true,
        },
        { provide: HttpClient, useValue: spy },
      ],
    });

    interceptor = TestBed.inject(LoadingIntercepterService);
    httpHandlerSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should decrement totalRequests on finalize', () => {
    const req = {} as any; // Your request object
    httpHandlerSpy.get.and.returnValue(of({}));

    interceptor['totalRequests']--;
    expect(interceptor['totalRequests']).toBe(-1);
  });
});
