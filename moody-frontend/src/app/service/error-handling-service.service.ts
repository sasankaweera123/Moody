import {Injectable} from '@angular/core';
import {AlertServiceService} from "./alert-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AlertType} from "../constants/alert-type";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingServiceService {

  constructor(
    private alertService: AlertServiceService
  ) { }

  showErrorMessages(error: HttpErrorResponse) {
    this.alertService.showAlert(AlertType.ERROR, this.getErrorMessage(error));
  }

  getErrorMessage(error: HttpErrorResponse) {
    if(error.error && error.error.code && error.error.reason){
      return error.error.reason;
    } else if(error.error.message) {
      return error.error.message;
    } else if(error.status === 0) {
      return 'Check your internet connection';
    } else if(error.status === 504){
      return 'Gateway Timeout';
    }else{
      return error.statusText;
    }
  }

}
