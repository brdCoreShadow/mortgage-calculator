import { IMortgage } from "./types";

export const handleMonthlyRepayment = (data: IMortgage) => {
  const { amount, rate, term } = data;

  const principal = amount;
  const annualInterestRate = rate / 100;
  const monthlyInterestRate = annualInterestRate / 12;
  const totalPayments = term * 12;

  const monthlyRepayment =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const totalRepayment = monthlyRepayment * totalPayments;

  return {
    monthly: monthlyRepayment.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    total: totalRepayment.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };
};

export const handleInterestOnlyRepayment = (data: IMortgage) => {
  const { amount, rate, term } = data;

  const annualInterestRate = rate / 100;
  const monthlyPayment = (amount * annualInterestRate) / 12;
  const totalRepayment = monthlyPayment * term * 12;

  return {
    monthly: monthlyPayment.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    total: totalRepayment.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };
};
