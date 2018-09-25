import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {NGXLogger} from 'ngx-logger';

@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(
      public platform: Platform,
      public logger: NGXLogger
  ) { }

  isCordova(): boolean {
    this.logger.error(`platforms: ${this.platform.platforms()}`);
    return this.platform.is('cordova');
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logger.error('An error occurred:', err.error.message);
      alert(`An error occurred: ${err.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.logger.error(`Backend returned code ${err.status}, body was: ${err.error}`);

      if (err.status === 401 || err.status === 403) {
        alert(`No permission to open. Please login`);
      }
    }
  }

}
