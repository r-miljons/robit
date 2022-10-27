import React from "react";
import { LoadingSpinner } from "./Spinner.styled";
import { loadingMessages } from "./loadingMessages";

export default function Spinner() {
	return (
		<LoadingSpinner>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<p>{loadingMessages[Math.floor(Math.random()*(loadingMessages.length - 1))]}</p>
		</LoadingSpinner>
	);
}
