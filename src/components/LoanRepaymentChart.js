import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LoanRepaymentChart = ({ repaymentData }) => {
  return (
    <div>
      <Typography variant="h6" align="center">Loan Repayment Schedule</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={repaymentData}>
          <XAxis dataKey="year" label={{ value: 'Year', position: 'bottom' }} />
          <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalPayment" name="Total Payment" stroke="#8884d8" />
          <Line type="monotone" dataKey="interest" name="Interest" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanRepaymentChart;
