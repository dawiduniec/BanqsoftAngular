import { Input, Component, OnInit, SimpleChanges } from '@angular/core';
import { Loan } from '../Models/loan';
import { ChangeDetectionStrategy } from '@angular/core';
import { MonthlyLoanRate } from '../Models/monthly-loan-rate';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HousingComponent implements OnInit {
  @Input()
  public loan?: Loan;

  @Input()
  public monthlyLoanRates?: MonthlyLoanRate[];

  constructor() { }

  public ngOnInit(): void {
  }
}
