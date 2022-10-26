import styled from "styled-components";

export const StyledToggleRideButton = styled.button`
    height: 50px;
    width: 80%;
    max-width: 250px;
    background-color: ${props => props.theme.colors.offWhite};
    border: none;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.darkText};
    box-shadow: ${props => props.theme.shadow};
    transition: all 0.2s;
    &:hover {
        background-color: ${props => props.theme.colors.darkText};
        color: ${props => props.theme.colors.offWhite};
    }
`