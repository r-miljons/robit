import styled from "styled-components"

export const StyledSummary = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.offWhite};
`