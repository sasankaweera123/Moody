import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {AlertType} from "../constants/alert-type";

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  previousMsg: string[] = [];
  timeId: any;
  constructor(
    private messageService: MessageService
  ) { }

  public showAlert(type: AlertType, ...msg: string[]) {
    this.showInfo(type, msg);
  }

  public showWithMultipleMessages(type: AlertType, msg: string[]) {
    this.showInfo(type, msg);
  }

  private showInfo(type: AlertType, message: string[]) {
    if(JSON.stringify(message) !== JSON.stringify(this.previousMsg)) {
      message && message.map(singleMessage => {
        this.messageService.add({
          severity: type,
          summary: singleMessage,
          detail: singleMessage,
          life: 5000,
          closable: true,
          sticky: false
        });
      }
      );
    this.previousMsg = message;
    clearTimeout(this.timeId);

    this.timeId = setTimeout(() => {
      this.previousMsg = [];
    }, 5000);
    }
  }
}
