import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoanResponse } from './Models/loan-response';

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  private apiURL = "https://localhost:44398";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public calculateLoan(amount: number, numberOfYears: number): Observable<LoanResponse> {

    return this.httpClient.get<LoanResponse>(
      `${this.apiURL}/loan/housing/${amount}/${numberOfYears}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  private errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
