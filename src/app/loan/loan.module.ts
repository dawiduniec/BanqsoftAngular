import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { IndexComponent } from './index/index.component';
import { HousingComponent } from './housing/housing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    HousingComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoanModule { }
