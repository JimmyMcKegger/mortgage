import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSection";
import TermSelect from "./components/MortgageApprovalDetails";

function App() {
	const [data, setData] = useState({
		homeValue: 375000,
		downPayment: 40000,
		loanAmount: 335000,
		loanTerm: 23,
		interestRate: 3.5,
		bankApprovalAmount: 440000,
	});

	return (
		<div className="App">
			<Navbar />
			<Container maxWidth="xl" sx={{ marginTop: 5}}>
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
