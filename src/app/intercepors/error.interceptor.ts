import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private route:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error=>{
                if(error){
                    this.route.navigateByUrl(`/error/${error.status}`);
                }
                return throwError(error);
            })
        )
    }
}