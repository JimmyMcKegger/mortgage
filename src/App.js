import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSection";
import TermSelect from "./components/MortgageApprovalDetails";

function App() {
	const [data, setData] = useState({
		homeValue: 370000,
		downPayment: 111000,
		loanAmount: 259000,
		loanTerm: 23,
		interestRate: 3.85,
		bankApprovalAmount: 440000,
		annualOverPayments: 0,
	});

	const calculateLoanTermAndInterest = () => {
		const { loanAmount, interestRate, annualOverPayments, loanTerm } = data;

		// Calculate monthly interest rate
		const monthlyInterestRate = interestRate / 12 / 100;

		// Calculate monthly payment without over-payments
		const monthlyPayment =
			(loanAmount * monthlyInterestRate) /
			(1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

		// Calculate total number of payments (months) without over-payments
		const totalPayments = loanTerm;

		// Calculate total interest paid without over-payments
		const totalInterestWithoutOverPayments =
			totalPayments * monthlyPayment - loanAmount;

		// Calculate remaining loan balance after over-payments
		let remainingLoanBalance = loanAmount;
		let totalInterestWithOverPayments = 0;
		let remainingLoanTerm = loanTerm;

		// Apply annual over-payments and recalculate remaining loan balance and term
		for (let i = 0; i < annualOverPayments; i++) {
			// Calculate additional payment amount for each over-payment
			const additionalPayment = annualOverPayments / 12;

			// Apply additional payment to remaining loan balance
			remainingLoanBalance -= additionalPayment;

			// Calculate interest for the current remaining loan balance
			const interestForCurrentBalance =
				remainingLoanBalance * monthlyInterestRate;

			// Update total interest with over-payments
			totalInterestWithOverPayments += interestForCurrentBalance;

			// If the remaining loan balance is less than or equal to zero, exit the loop
			if (remainingLoanBalance <= 0) {
				remainingLoanBalance = 0;
				break;
			}

			// If the remaining loan balance is not yet zero, decrement the remaining loan term
			remainingLoanTerm--;

			// If remaining loan term reaches zero, exit the loop
			if (remainingLoanTerm === 0) {
				break;
			}
		}

		// Calculate the reduction in loan term due to over-payments
		const reductionInLoanTerm = loanTerm - remainingLoanTerm;

		// Calculate the new total number of payments (months) with over-payments
		const totalPaymentsWithOverPayments = remainingLoanTerm;

		// Calculate the new total interest paid with over-payments
		const totalInterestPaidWithOverPayments = totalInterestWithOverPayments;

		// You can update the state with the new values if necessary
		setData({
			...data,
			remainingLoanBalance,
			totalPayments: totalPaymentsWithOverPayments,
			totalInterestPaid: totalInterestPaidWithOverPayments,
			reductionInLoanTerm,
		});
	};

  useEffect(() => {
    calculateLoanTermAndInterest();
}, [data.annualOverPayments]);


	return (
		<div className="App">
			<Navbar />
			<Container maxWidth="xl" sx={{ marginTop: 5 }}>
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={6}>
						<SliderSelect data={data} setData={setData} />
						<TermSelect data={data} setData={setData} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Result data={data} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
