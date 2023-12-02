import { Component } from '@angular/core';
import {externalResourcePath} from "../../constants/external-resource-path";

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.css']
})
export class FeaturePageComponent {

  protected readonly externalResourcePath = externalResourcePath;
}
