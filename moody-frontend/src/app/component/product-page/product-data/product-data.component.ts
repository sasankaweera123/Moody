import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServiceService} from "../../../service/product-service.service";
import {ErrorHandlingServiceService} from "../../../service/error-handling-service.service";
import {ProductPolarityService} from "../../../service/product-polarity.service";
import {ProductReviewService} from "../../../service/product-review.service";
import {externalResourcePath} from "../../../constants/external-resource-path";

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit{

  productDetails: {
    productName: string;
    productLink: string;
    imageUrl: string;
    polarity: string;
    subjectivity: string;
    reviewCount: string;
    review: string[];
  } = {
    productName: '',
    productLink: '',
    imageUrl: '',
    polarity: '',
    subjectivity: '',
    reviewCount: '',
    review: []
  }

  productIdValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private errorHandlingService: ErrorHandlingServiceService,
    private productService: ProductServiceService,
    private productPolarityService: ProductPolarityService,
    private productReviewService: ProductReviewService,
  ) {
  }

  ngOnInit(): void {

    if(this.route.snapshot.params.hasOwnProperty('productId')){
      this.getProductByProductId(this.route.snapshot.params['productId']);
      this.getProductPolarityByProductId(this.route.snapshot.params['productId']);
      this.getAllReviews();
    }
    console.log(this.productDetails);
  }
  getProductByProductId(productId: string) {
    this.productService.getProductByProductID(productId).subscribe(
      (response: any) => {
        this.productDetails.productName = response['data']['Product']['productName'];
        this.productDetails.productLink = response['data']['Product']['productLink'];
        this.productDetails.imageUrl = response['data']['Product']['imageUrl'];
        this.productIdValue = response['data']['Product']['productId'];
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  getProductPolarityByProductId(productId: string) {
    this.productPolarityService.getProductPolarityByProductID(productId).subscribe(
      (response: any) => {
        const productPolarity =((Number(response['data']['ProductPolarity']['avg_polarity_title'])+Number(response['data']['ProductPolarity']['avg_polarity_comment']))/2).toFixed(3);
        const productSubjectivity =((Number(response['data']['ProductPolarity']['avg_subjectivity_title'])+Number(response['data']['ProductPolarity']['avg_subjectivity_comment']))/2).toFixed(3);
        this.productDetails.polarity = productPolarity.toString();
        this.productDetails.subjectivity = productSubjectivity.toString();
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  getAllReviews(){
    this.productReviewService.getAllProductReview().subscribe(
      (response: any) => {
        console.log(response['data']['Reviews']);
        const productReview = response['data']['Reviews'].filter((review: any) => review.productId === this.productIdValue);
        this.productDetails.reviewCount = productReview.length.toString();
        console.log(productReview);
        for(let i=0;i<5;i++){
          const randomReview = Math.floor(Math.random() * productReview.length);
          this.productDetails.review.push(productReview[randomReview].comment);
        }
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

  onImageError(event: any) {
    event.target.src = externalResourcePath.DEFAULT_IMAGE;
  }

}
