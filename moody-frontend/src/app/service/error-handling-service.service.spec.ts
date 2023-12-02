import { TestBed } from '@angular/core/testing';

import { ErrorHandlingServiceService } from './error-handling-service.service';
import {AlertServiceService} from "./alert-service.service";
import {MessageService} from "primeng/api";

describe('ErrorHandlingServiceService', () => {
  let errorHandlingService: ErrorHandlingServiceService;
  let alertService: AlertServiceService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlingServiceService, AlertServiceService,MessageService],
    });
    errorHandlingService = TestBed.inject(ErrorHandlingServiceService);
    alertService = TestBed.inject(AlertServiceService);
  });

  it('should be created', () => {
    expect(errorHandlingService).toBeTruthy();
  });

});
