import {Component, OnInit} from '@angular/core';
import {externalResourcePath} from "./constants/external-resource-path";
import {LoadingService} from "./service/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'moody';

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingService.setLoading(true);
      setTimeout(() => {
          this.loadingService.setLoading(false);
      }, 3000);
    if(document.location.host === 'localhost:4200') {
      externalResourcePath.BACK_END = 'http://localhost:8080';
    }
  }
}
