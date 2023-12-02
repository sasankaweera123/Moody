import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingIntercepterService implements HttpInterceptor{

  private totalRequests = 0;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    return next.handle(req).pipe(
      finalize(()=>{
        this.totalRequests--;
      }
    )
    );
  }
}
