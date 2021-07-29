import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Loan } from '../Models/loan';
import { MonthlyLoanRate } from '../Models/monthly-loan-rate';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public loanForm: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfYears: new FormControl('', [Validators.required, Validators.min(1)])
  });

  public loan?: Loan;
  public monthlyLoanRates: MonthlyLoanRate[] = [];

  public showLoanDetails: boolean = false;

  public constructor(
    public loanService: LoanService,
    private router: Router) { }

  public get formControls() {
    return this.loanForm.controls;
  }

  public changeCalculation() {
    this.showLoanDetails = false;
  }

  public ngOnInit(): void {
  }

  public submit() {
    this.loanService.calculateLoan(this.loanForm.controls.amount.value, this.loanForm.controls.numberOfYears.value)
      .subscribe(res => {
        this.loan = res.loan;
        this.monthlyLoanRates = res.monthlyLoanRates;
        this.showLoanDetails = true;
      });
  }
}

