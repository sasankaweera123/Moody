import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./component/main-layout/main-layout.component";
import {LandingLayoutComponent} from "./component/landing-layout/landing-layout.component";
import {externalResourcePath} from "./constants/external-resource-path";
import {ProductPageComponent} from "./component/product-page/product-page.component";
import {FeaturePageComponent} from "./component/feature-page/feature-page.component";
import {ProductDataComponent} from "./component/product-page/product-data/product-data.component";

const routes: Routes = [
  { path: 'moody', component: MainLayoutComponent, children: [
      {
        path: '',
        component: LandingLayoutComponent
      },
      {
        path: 'product',
        component: ProductPageComponent
      },
      {
        path: 'product/:productId',
        component: ProductDataComponent
      },
      {
        path: 'feature',
        component: FeaturePageComponent
      }
    ]
  },
  { path: '**', redirectTo: externalResourcePath.MAIN_MENU, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
