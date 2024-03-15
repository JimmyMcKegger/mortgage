import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const MortgageApprovalDetails = ({ data, setData }) => {
	const handleTermChange = (event) => {
		setData({
			...data,
			loanTerm: event.target.value,
		});
	};

	const handleApprovalAmountChange = (event) => {
		setData({
			...data,
			bankApprovalAmount: parseFloat(event.target.value) || 0, // Ensures value is treated as a number
		});
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel>Term</InputLabel>
				<Select value={data.loanTerm} onChange={handleTermChange} label="Term">
					<MenuItem value={5}>Five</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={15}>Fifteen</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={23}>Twenty Three</MenuItem>
					<MenuItem value={25}>Twenty Five</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<TextField
					label="Approved Amount (€)"
					type="number"
					inputProps={{ min: 0, step: 100000 }}
					value={data.bankApprovalAmount}
					onChange={handleApprovalAmountChange}
					variant="outlined"
				/>
			</FormControl>
		</div>
	);
};

export default MortgageApprovalDetails;
