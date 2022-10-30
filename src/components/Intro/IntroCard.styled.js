import styled from "styled-components";

export const StyledIntroCard = styled.div`
	position: relative;
	height: 500px;
	width: calc(100vw - 40px);
	min-width: calc(100vw - 40px);
	margin: 0 20px;
	background-color: ${(props) => props.theme.colors.offWhite};
	border-radius: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 45px;
	gap: 40px;
	box-sizing: border-box;
	font-family: Raleway;
	h2 {
		font-weight: 800;
	}
	p {
		font-size: 24px;
	}
`;
