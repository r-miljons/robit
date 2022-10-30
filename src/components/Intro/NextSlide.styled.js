import styled from "styled-components"

export const StyledNextButton = styled.button`
    height: 50px; 
    width: ${props => props.large? "100%" : "calc(100% - 90px)"};;
    max-width: ${props => props.large? "410px" : "210px"};
    border-radius: 30px;
    background-color: ${props => props.theme.colors.primaryColor};
    box-shadow: ${props => props.theme.shadow};
    border: none;
    display: block;
    position: ${props => props.large? "static" : "absolute"};
    left: 0;
    right: 0;
    margin: 0 auto ${props => props.large? "20px" : ""} !important; 
    bottom: 45px;
    box-sizing: border-box;
    font-family: Raleway;
    font-weight: 500px;
    font-size: ${props => props.large? "17px" : "21px"};
    text-transform: uppercase;
    color: white;
`