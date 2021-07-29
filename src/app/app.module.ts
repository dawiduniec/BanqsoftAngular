import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoanModule } from './loan/loan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoanModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
