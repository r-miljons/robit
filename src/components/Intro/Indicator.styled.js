import styled from "styled-components"

export const StyledIndicator = styled.div`
    width: 7px;
    height: 7px;
    background-color: ${props => props.theme.colors.offWhite};
    border-radius: 50%;
    opacity: ${props => props.active? "1" : "0.5"};
    transform: ${props => props.active? "scale(1.2)" : "scale(1)"};
    transition: all 0.2s;
`