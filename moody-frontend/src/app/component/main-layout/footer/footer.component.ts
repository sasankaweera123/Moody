import { Component } from '@angular/core';
import {externalResourcePath} from "../../../constants/external-resource-path";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  protected readonly externalResourcePath = externalResourcePath;
}
