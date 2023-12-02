import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorHandlingServiceService} from "./error-handling-service.service";
import {externalResourcePath} from "../constants/external-resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductPolarityService {

  constructor(private http: HttpClient,
              private errorHandlingService: ErrorHandlingServiceService) { }

  getAllProductPolarity() {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_ALL_PRODUCT_POLARITY
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }

  getProductPolarityByProductID(productId: string) {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_PRODUCT_BY_PRODUCT_POLARITY_ID + productId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }
}
