import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {externalResourcePath} from "../constants/external-resource-path";
import {catchError} from "rxjs";
import {ErrorHandlingServiceService} from "./error-handling-service.service";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingServiceService
  ) { }

  getAllProducts() {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_ALL_PRODUCTS
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }

  getProductByProductID(productId: string) {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_PRODUCT_BY_PRODUCT_ID + productId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }
}
