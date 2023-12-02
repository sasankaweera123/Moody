import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingService} from "../../service/loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit, OnDestroy {
  loading = false;
  private subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.loadingService.getLoading().subscribe((value) => {
      this.loading = value;
        if (!value) {
          setTimeout(() => {
              this.loading = false;
          }, 500);
        }
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
