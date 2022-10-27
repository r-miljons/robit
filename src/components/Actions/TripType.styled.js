import styled from "styled-components";

export const StyledTripType = styled.div`
	display: flex;
	max-width: 320px;
	width: 100%;
	height: 56px;
	align-items: center;
	border-radius: 10px;
	box-shadow: ${(props) => props.theme.shadow};
	gap: 30px;
	background-color: ${(props) => props.theme.colors.offWhite};
	padding: 0 20px !important;
	img {
		width: 35px;
		height: 31px;
		object-fit: contain;
	}
	p {
		font-family: Raleway;
		font-size: 16px;
		font-weight: 600;
		line-height: 30px;
        color: ${props => props.theme.colors.primaryColor};
	}
    &:hover {
        background-color: #8B9B92;
        p {
            color: white;
        }
        img {
            filter: invert(1) brightness(60);
        }
    }
`;
