import styled from "styled-components";

export const StyledMiniMap = styled.div`
	overflow: hidden;
    width: calc(100% - 10px);
    margin: 0 auto !important;
    height: 200px;
    max-width: 300px;
    display: block;
    min-width: 0;
    border-radius: 30px;
    box-shadow: ${props => props.theme.lightShadow};
	img {
		margin: -20px 0 0 -20px;
		height: calc(100% + 40px);
		width: calc(100% + 40px);
        object-fit: cover;
	}
`;
