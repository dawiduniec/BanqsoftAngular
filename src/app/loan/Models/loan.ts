import { MonthlyLoanRate } from './monthly-loan-rate';

export interface Loan {
    numberOfPayments: number;
    monthlyRate: number;
    amount: number;
    interestRate: number;
}