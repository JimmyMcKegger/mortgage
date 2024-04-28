import React from "react";
import { Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { toCurrency } from "../utils/format";
import LoanRepaymentChart from "./LoanRepaymentChart"; // Import the LoanRepaymentChart component

const Result = ({ data }) => {
    const { downPayment, loanAmount, loanTerm, interestRate } = data;

    const totalTermMonths = loanTerm * 12;
    const monthlyInterestRate = interestRate / 100 / 12;

    const monthlyPayment =
        (loanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalTermMonths)) /
        (Math.pow(1 + monthlyInterestRate, totalTermMonths) - 1);

    const totalInterest = monthlyPayment * totalTermMonths - loanAmount;
    const totalCost = downPayment + loanAmount + totalInterest;

    // Prepare repayment data for the LoanRepaymentChart component
    const repaymentData = [];
    let remainingBalance = loanAmount;
    for (let year = 1; year <= loanTerm; year++) {
        const interestForYear = remainingBalance * monthlyInterestRate * 12;
        const principalForYear = monthlyPayment * 12 - interestForYear;
        remainingBalance -= principalForYear;
        repaymentData.push({
            year,
            totalPayment: principalForYear + interestForYear,
            interest: interestForYear,
        });
    }

    return (
        <Stack gap={2} my={2}>
            <Typography variant="h5" textAlign="center">
                Monthly Payment: {toCurrency(monthlyPayment)}
            </Typography>
            <Typography variant="h6" textAlign="center">
                Total Cost: {toCurrency(totalCost)}
            </Typography>
            <Typography variant="h6" textAlign="center">
                Total Interest: {toCurrency(totalInterest)}
            </Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: loanAmount, label: "Principal" },
                            { id: 1, value: totalInterest, label: "Interest" },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
            {/* Include the LoanRepaymentChart component */}
            <LoanRepaymentChart repaymentData={repaymentData} />
        </Stack>
    );
};

export default Result;
