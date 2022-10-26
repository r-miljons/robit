import React from "react";
import { StyledMenuIcon } from "./MenuIcon.styled";
import menuIcon from "../../assets/menu-icon.svg";

export default function Menu() {
	return (
		<StyledMenuIcon>
			<img src={menuIcon} alt="menu" />
		</StyledMenuIcon>
	);
}
