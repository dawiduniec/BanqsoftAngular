import { Loan } from './loan';
import { MonthlyLoanRate } from './monthly-loan-rate';

export interface LoanResponse {
    monthlyLoanRates: MonthlyLoanRate[];
    loan: Loan;
}