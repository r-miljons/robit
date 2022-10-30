import styled from "styled-components"

export const StyledSliderCard = styled.div`
    background-color: rgb(213,223,215);
    box-sizing: border-box;
    padding: 20px !important;
    border-radius: 10px;
    overflow: hidden;
    width: calc(100% - 50px);
    max-width: 410px;
    margin: 0 auto !important;
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 20px;
    padding: 20px;
    #stat {
        color: white;
        background-color: ${props => props.theme.colors.darkGreen};
        padding: 10px 20px;
        border-radius: 10px;
    }
`