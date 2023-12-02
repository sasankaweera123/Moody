import { Component } from '@angular/core';
import {externalResourcePath} from "../../../constants/external-resource-path";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    protected readonly externalResourcePath = externalResourcePath;
}
