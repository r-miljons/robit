import styled from "styled-components";

export const StyledMenuIcon = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.colors.primaryColor};
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`