import {TestBed} from '@angular/core/testing';

import {AlertServiceService} from './alert-service.service';
import {MessageService} from "primeng/api";
import {AlertType} from "../constants/alert-type";

describe('AlertServiceService', () => {
  let alertService: AlertServiceService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertServiceService, MessageService],
    });
    alertService = TestBed.inject(AlertServiceService);
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(alertService).toBeTruthy();
  });

  it('should show alert with single message', () => {
    spyOn(messageService, 'add');

    const alertType: AlertType = AlertType.SUCCESS;
    const message = 'This is a test message';

    alertService.showAlert(alertType, message);

    expect(messageService.add).toHaveBeenCalledWith({
      severity: alertType,
      summary: message,
      detail: message,
      life: 5000,
      closable: true,
      sticky: false,
    });
  });

  it('should show alert with multiple messages', () => {
    spyOn(messageService, 'add');

    const alertType: AlertType = AlertType.INFO;
    const messages = ['Message 1', 'Message 2', 'Message 3'];

    alertService.showWithMultipleMessages(alertType, messages);

    messages.forEach((message) => {
      expect(messageService.add).toHaveBeenCalledWith({
        severity: alertType,
        summary: message,
        detail: message,
        life: 5000,
        closable: true,
        sticky: false,
      });
    });
  });

  it('should not show duplicate alerts', () => {
    spyOn(messageService, 'add');

    const alertType: AlertType = AlertType.WARN;
    const messages = ['Duplicate Message', 'Duplicate Message'];

    alertService.showWithMultipleMessages(alertType, messages);

    expect(messageService.add).toHaveBeenCalledTimes(2);
  });
});


