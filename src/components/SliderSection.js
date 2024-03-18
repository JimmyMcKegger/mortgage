import React from "react";
import SliderComponent from "./common/SliderComponent";
import { toCurrency, toPercent } from "../utils/format";


const SliderSection = ({ data, setData }) => {
	const handleHomeValueChange = (value) => {
		setData({
			...data,
			homeValue: value,
		});
	};

	const handleDownPaymentChange = (value) => {
		let loanAmount = data.homeValue - value;
		if (loanAmount > data.bankApprovalAmount) {
			loanAmount = data.bankApprovalAmount;
			value = data.homeValue - loanAmount;
		}

		setData({
			...data,
			downPayment: value,
			loanAmount,
		});
	};

	const handleLoanAmountChange = (value) => {
		const downPayment = data.homeValue - value;
		setData({
			...data,
			loanAmount: value,
			downPayment,
		});
	};

	return (
		<>
			<SliderComponent
				label={"Home Value"}
				defaultValue={data.homeValue}
				value={data.homeValue}
				min={20000}
				max={600000}
				step={1000}
				amount={toCurrency(data.homeValue)}
				onChange={(e, value) => handleHomeValueChange(value)}
			/>
			<SliderComponent
				label={"Down Payment"}
				defaultValue={data.downPayment}
				value={data.downPayment}
				min={0} // Updated to ensure flexibility in down payment
				max={data.homeValue}
				step={500}
				amount={toCurrency(data.downPayment)}
				onChange={(e, value) => handleDownPaymentChange(value)}
			/>
			<SliderComponent
				label="Mortgage Amount"
				min={0}
				max={Math.min(data.bankApprovalAmount, data.homeValue)} // Ensure max does not exceed bank limit or home value
				step={10000}
				defaultValue={data.loanAmount}
				value={data.loanAmount}
				amount={toCurrency(data.loanAmount)}
				onChange={(e, value) => handleLoanAmountChange(value)}
			/>
			<SliderComponent
				label="Interest Rate"
				min={1.00}
				max={6.00}
				step={0.01}
				defaultValue={data.interestRate}
				value={data.interestRate}
				amount={toPercent(data.interestRate)}
				onChange={(e, value) =>
					setData({
						...data,
						interestRate: value,
					})
				}
			/>
		</>
	);
};

export default SliderSection;
