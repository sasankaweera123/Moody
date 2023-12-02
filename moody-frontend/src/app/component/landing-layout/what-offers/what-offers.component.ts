import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/productModel";
import {ProductPolarity} from "../../../dto/productPolarity";
import {ProductReview} from "../../../dto/productReview";

@Component({
  selector: 'app-what-offers',
  templateUrl: './what-offers.component.html',
  styleUrls: ['./what-offers.component.css']
})
export class WhatOffersComponent implements OnInit{

  @Input() products: ProductModel[] = [];
  @Input() productPolarity: ProductPolarity[] = [];
  @Input() productReview: ProductReview[] = [];

  moodyDetails = {
    productsCount: 0,
    reviewCount: 0,
    websiteCount: 3,
    categoriesCount: 1,
    avgPolarity: 0,
  }

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.calculateMoodyDetails();
    }
    , 500);
  }

  calculateMoodyDetails() {
    this.moodyDetails.productsCount = this.products.length;
    this.moodyDetails.reviewCount = this.productReview.length;
    for(let product of this.productPolarity) {
      this.moodyDetails.avgPolarity += Number(product.avg_polarity_comment) + Number(product.avg_polarity_title);
    }
    this.moodyDetails.avgPolarity = Math.round((this.moodyDetails.avgPolarity / (this.productPolarity.length*2))*100)/100;

    console.log(this.moodyDetails);
  }
}
