import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../dto/productModel";
import {ErrorHandlingServiceService} from "../../service/error-handling-service.service";
import {ProductServiceService} from "../../service/product-service.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{

  products: ProductModel[] = [];

  productDetails: {
    productName: string;
    imageUrl: string;
  } = {
    productName: '',
    imageUrl: ''
  };

  constructor(
    private errorHandlingService: ErrorHandlingServiceService,
    private productService: ProductServiceService
  ) {
  }

  ngOnInit(): void {
    this.getAllProducts();

    console.log(this.productDetails);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.products = response['data']['Products'];
      },
      (error) => {
        this.errorHandlingService.showErrorMessages(error);
      }
    );
  }

}
