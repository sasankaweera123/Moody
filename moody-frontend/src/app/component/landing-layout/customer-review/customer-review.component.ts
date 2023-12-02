import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/productModel";
import {ProductReview} from "../../../dto/productReview";

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit{

  @Input() products: ProductModel[] = [];
  @Input() productReview: ProductReview = {} as ProductReview;

  customerReviewDetails = {
    productComment:'',
    productName:'',
    productRating:0
  }
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.productReview);
    setTimeout(() => {
      this.getCustomerReview();
    }
    , 1000);
  }

  getCustomerReview() {

    for(let i=1; i<this.products.length; i++) {
      if(this.products[i].productId == this.productReview.productId) {
        this.customerReviewDetails.productName = this.products[i].productName;
      }
    }
    this.customerReviewDetails.productComment = this.productReview.comment;
    this.customerReviewDetails.productRating = this.productReview.rating;
  }

}
