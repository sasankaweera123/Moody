import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ErrorHandlingServiceService} from "../../service/error-handling-service.service";
import {ProductServiceService} from "../../service/product-service.service";
import {ProductModel} from "../../dto/productModel";
import {ProductPolarity} from "../../dto/productPolarity";
import {ProductReview} from "../../dto/productReview";
import {ProductPolarityService} from "../../service/product-polarity.service";
import {ProductReviewService} from "../../service/product-review.service";
import {LoadingService} from "../../service/loading.service";


@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit{

  products: ProductModel[] = [];
  productPolarity: ProductPolarity[] = [];
  productReview: ProductReview[] = [];
  productReviewByProductId: ProductReview= {} as ProductReview;
  productNames: string[] = [];

  constructor(private router: Router,
              private errorHandlingService: ErrorHandlingServiceService,
              private productService: ProductServiceService,
              private productPolarityService: ProductPolarityService,
              private productReviewService: ProductReviewService
              ) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllProductPolarity();
    this.getAllProductReview();

    setTimeout(() => {
      this.getRandomProductReview();
    }, 500);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.products = response['data']['Products'];
        this.productNames = [...new Set(this.products.map(product => product.productName))];
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  getAllProductPolarity() {
    this.productPolarityService.getAllProductPolarity().subscribe(
      (response: any) => {
        this.productPolarity = response['data']['ProductPolarity'];
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  getAllProductReview() {
    this.productReviewService.getAllProductReview().subscribe(
      (response: any) => {
        this.productReview = response['data']['Reviews'];
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  getRandomProductReview() {
    const randomProductId = Math.floor(Math.random() * this.productReview.length);
    console.log(randomProductId);
    this.getProductReviewById(randomProductId.toString());
  }

  getProductReviewById(productId: string) {
    this.productReviewService.getProductReviewByProductID(productId).subscribe(
      (response: any) => {
        this.productReviewByProductId = response['data']['Reviews'];
        console.log(this.productReviewByProductId);
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }


}
