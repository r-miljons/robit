import styled from "styled-components"

export const StyledNextButton = styled.button`
    height: 50px;
    width: calc(100% - 90px);
    max-width: 210px;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.primaryColor};
    box-shadow: ${props => props.theme.shadow};
    border: none;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 45px;
    box-sizing: border-box;
    font-family: Raleway;
    font-weight: 500px;
    font-size: 21px;
    text-transform: uppercase;
    color: white;
`