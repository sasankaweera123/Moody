import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorHandlingServiceService} from "./error-handling-service.service";
import {externalResourcePath} from "../constants/external-resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(private http: HttpClient,
              private errorHandlingService: ErrorHandlingServiceService) { }

  getAllProductReview() {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_ALL_PRODUCTS_REVIEWS
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }

  getProductReviewByProductID(productId: string) {
    return this.http.get(
      externalResourcePath.BACK_END + externalResourcePath.GET_PRODUCT_BY_PRODUCT_REVIEW_ID + productId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandlingService.showErrorMessages(error);
        throw new Error();
      })
    );
  }
}
