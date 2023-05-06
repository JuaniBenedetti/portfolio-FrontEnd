import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError} from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _message: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");
    if (token) {
      const cloned = request.clone({
          headers: request.headers.set("Authorization", token)
      });
      return next.handle(cloned).pipe(catchError((error: HttpErrorResponse) => {
        const message = error.error.error || "@ERROR";
        this.errorMessage(message);
        return throwError(() => message);
      }));
    }
    else {
      return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        const message = error.error.error || "@ERROR";
        this.errorMessage(message);
        return throwError(() => message);
      }));
    }
  }


  errorMessage(message: string): void {
    this._message.clear();
    this._message.add({ key: 'bc', severity: 'error', summary: 'Error', detail: message });
  }
}