import styled from "styled-components";

export const StyledToggleRideButton = styled.button`
    height: 50px;
    position: absolute;
    top: 40px;
    width: 80%;
    max-width: 250px;
    background-color: ${props => props.active ? props.theme.colors.darkGreen : props.theme.colors.offWhite};
    border: none;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.darkText};
    box-shadow: ${props => props.theme.shadow};
    opacity: ${props => props.visible ? 1 : 0};
    transition: all 0.1s;
    &:active {
        background-color: ${props => props.theme.colors.darkGreen};
        color: ${props => props.theme.colors.offWhite};
    }
`