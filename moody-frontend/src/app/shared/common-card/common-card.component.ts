import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {externalResourcePath} from "../../constants/external-resource-path";

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.css']
})
export class CommonCardComponent implements OnInit{

  @Input() product: any;

  constructor(
    private router: Router,) {
  }

  ngOnInit() {
    console.log(this.product);
  }

  navigateToProduct(id: string){
    this.router.navigate([externalResourcePath.PRODUCT, id]).then(r=> console.log(r));
  }

  onImageError(event: any) {
    event.target.src = externalResourcePath.DEFAULT_IMAGE;
  }

}
