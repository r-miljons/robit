import React from "react";
import { StyledSquareSpinner } from "./SquareSpinner.styled";

export default function SquareSpinner() {
	return (
		<StyledSquareSpinner>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</StyledSquareSpinner>
	);
}
