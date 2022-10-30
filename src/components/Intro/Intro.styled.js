import styled from "styled-components";

export const StyledIntroContainer = styled.div`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryColor};
    box-sizing: border-box;
`