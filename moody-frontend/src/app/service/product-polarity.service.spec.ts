import { TestBed } from '@angular/core/testing';

import { ProductPolarityService } from './product-polarity.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ErrorHandlingServiceService} from "./error-handling-service.service";
import {MessageService} from "primeng/api";
import {externalResourcePath} from "../constants/external-resource-path";

describe('ProductPolarityService', () => {
  let service: ProductPolarityService;
  let httpTestingController: HttpTestingController;
  let errorHandlingService: ErrorHandlingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductPolarityService, ErrorHandlingServiceService,MessageService],
    });

    service = TestBed.inject(ProductPolarityService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve all product polarity', () => {
    const dummyResponse = {
      "timestamp": "2023-12-02T11:09:13.3298127",
      "statusCode": 200,
      "status": "OK",
      "message": "ProductPolarity retrieved successfully",
      "data": {
        "ProductPolarity": {
          "id": 1,
          "productId": "P0001",
          "avg_polarity_title": "0.6437219835481189",
          "avg_subjectivity_title": "0.5113571428571428",
          "avg_polarity_comment": "0.6311898056578258",
          "avg_subjectivity_comment": "0.5608988095238095"
        }
      }
    };

    service.getAllProductPolarity().subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne(
      externalResourcePath.BACK_END + externalResourcePath.GET_ALL_PRODUCT_POLARITY
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should retrieve product polarity by product ID', () => {
    const productId = '123';
    const dummyResponse = {
      "timestamp": "2023-12-02T11:06:12.0761655",
      "statusCode": 200,
      "status": "OK",
      "message": "ProductPolarity list retrieved successfully",
      "data": {
        "ProductPolarity": [
          {
            "id": 1,
            "productId": "P0001",
            "avg_polarity_title": "0.6437219835481189",
            "avg_subjectivity_title": "0.5113571428571428",
            "avg_polarity_comment": "0.6311898056578258",
            "avg_subjectivity_comment": "0.5608988095238095"
          },
          {
            "id": 2,
            "productId": "P0002",
            "avg_polarity_title": "0.5264089065371619",
            "avg_subjectivity_title": "0.5559722222222222",
            "avg_polarity_comment": "0.532769413585484",
            "avg_subjectivity_comment": "0.5915128066378066"
          },
        ]
      }
    };

    service.getProductPolarityByProductID(productId).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne(
      externalResourcePath.BACK_END + externalResourcePath.GET_PRODUCT_BY_PRODUCT_POLARITY_ID + productId
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
