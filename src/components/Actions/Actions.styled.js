import styled from "styled-components";

export const StyledActionsContainer = styled.div`
    height: 120px;
    width: 100%;
    background-color: ${props => props.theme.colors.primaryColor};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 999;
    position: fixed;
    bottom: 0;
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    justify-content: center;
    align-items: center;

    #swipe-bar {
        background-color: ${props => props.theme.colors.offWhite};
        height: 5px;
        border-radius: 10px;
        width: 40%;
        max-width: 80px;
        position: absolute;
        top: 16px;
    }
`