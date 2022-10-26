import React from "react";
import { LoadingSpinner } from "./Spinner.styled";

export default function Spinner() {
	return (
		<LoadingSpinner>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<p>Loading your mobility data</p>
		</LoadingSpinner>
	);
}
