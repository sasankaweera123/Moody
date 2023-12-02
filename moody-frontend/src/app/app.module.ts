import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NavBarComponent } from './component/main-layout/nav-bar/nav-bar.component';
import { FooterComponent } from './component/main-layout/footer/footer.component';
import { LandingLayoutComponent } from './component/landing-layout/landing-layout.component';
import { CoverComponent } from './component/landing-layout/cover/cover.component';
import { AvailableWebPagesComponent } from './component/landing-layout/available-web-pages/available-web-pages.component';
import { WhatOffersComponent } from './component/landing-layout/what-offers/what-offers.component';
import { CustomerReviewComponent } from './component/landing-layout/customer-review/customer-review.component';
import {MessageService} from "primeng/api";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {LoadingIntercepterService} from "./service/loading-intercepter.service";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";
import { ProductPageComponent } from './component/product-page/product-page.component';
import { FeaturePageComponent } from './component/feature-page/feature-page.component';
import { CommonCardComponent } from './shared/common-card/common-card.component';
import { ProductDataComponent } from './component/product-page/product-data/product-data.component';
import { LoadingPageComponent } from './component/loading-page/loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavBarComponent,
    FooterComponent,
    LandingLayoutComponent,
    CoverComponent,
    AvailableWebPagesComponent,
    WhatOffersComponent,
    CustomerReviewComponent,
    ProductPageComponent,
    FeaturePageComponent,
    CommonCardComponent,
    ProductDataComponent,
    LoadingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingIntercepterService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
