import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ErrorHandlingServiceService} from "../../../service/error-handling-service.service";
import {ProductServiceService} from "../../../service/product-service.service";
import {ProductModel} from "../../../dto/productModel";
import {Router} from "@angular/router";
import {externalResourcePath} from "../../../constants/external-resource-path";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
})
export class CoverComponent  implements OnInit{

  @Input() products: ProductModel[] = [];
  @Input() reviewLength: string = '';
  selectedProduct: string = '';
  selectedProductId: string = '';
  @Input() productNames: string[] = [];
  filteredProducts: string[] = [];

  @ViewChild('productInput') productInput!: ElementRef;


  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;

    if (
      !this.productInput.nativeElement.contains(clickedElement) &&
      this.isClickedOutsideUl(clickedElement)
    ){
      this.selectedProduct = '';
    }
  }

  isClickedOutsideUl(target: HTMLElement): boolean {
    return !target.closest('ul');
  }

  constructor(
    private router: Router,
    private errorHandlingService: ErrorHandlingServiceService,
    private productService: ProductServiceService
  ) {
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.filteredProducts = this.productNames.filter(product => product.toLowerCase().includes(this.selectedProduct.toLowerCase())).map(product => product);
  }

  onSubmit() {
    this.router.navigate(['product', this.selectedProduct]);
  }
  onProductSelect(productName: string) {
    console.log(productName);
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].productName == productName) {
        this.selectedProductId = this.products[i].id.toString();
      }
    }
    this.router.navigate([externalResourcePath.PRODUCT, this.selectedProductId]);
  }

  protected readonly Number = Number;
}
