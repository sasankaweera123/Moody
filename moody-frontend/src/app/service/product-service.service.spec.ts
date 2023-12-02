import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ErrorHandlingServiceService} from "./error-handling-service.service";
import {MessageService} from "primeng/api";
import {externalResourcePath} from "../constants/external-resource-path";

describe('ProductServiceService', () => {
  let service: ProductServiceService;
  let httpTestingController: HttpTestingController;
  let errorHandlingService: ErrorHandlingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductServiceService, ErrorHandlingServiceService, MessageService],
    });

    service = TestBed.inject(ProductServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all product reviews', () => {
    const mockProductReviews = {
      "timestamp": "2023-12-02T11:54:17.806725",
      "statusCode": 200,
      "status": "OK",
      "message": "Reviews list retrieved successfully",
      "data": {
        "Reviews": [
          {
            "id": 1,
            "productId": "P0001",
            "title": "A great deal on a great phone",
            "comment": "Extremely impressed with the deal I got on this phone.  I got it for my wife, and she is quite pleased with it.  She likes the large screen, and she is happy with the switch from her Samsung to this iPhone.  It has LOTS of memory, so that should never be ",
            "rating": 5
          },
          {
            "id": 2,
            "productId": "P0001",
            "title": "Apple ",
            "comment": "Always use apple ( i phone , i mac )Now not really happy the XS max ( it is not really big  ) like they said the note Samsung better also if i could return it and i will .Not happy with apple any more Read full review...",
            "rating": 2
          },
        ]
      }
    };

    service.getAllProducts().subscribe((response) => {
      expect(response).toEqual(mockProductReviews);
    });

    const req = httpTestingController.expectOne(
        externalResourcePath.BACK_END + externalResourcePath.GET_ALL_PRODUCTS
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockProductReviews);
    httpTestingController.verify();
  });

  it('should retrieve product reviews by Id', () => {
    const productId = '3';
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

    service.getProductByProductID(productId).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne(
        externalResourcePath.BACK_END + externalResourcePath.GET_PRODUCT_BY_PRODUCT_ID + productId
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
