import styled from "styled-components";

export const StyledMiniMap = styled.div`
	overflow: hidden;
    width: 100%;
    height: 200px;
    max-width: 300px;
    min-width: 0;
    border: 4px solid ${props => props.theme.colors.lightGreen};
	img {
		margin: -20px 0 0 -20px;
		height: calc(100% + 40px);
		width: calc(100% + 40px);
        object-fit: cover;
	}
`;
