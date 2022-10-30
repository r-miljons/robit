import styled from "styled-components"

export const StyledSummaryWrapper = styled.div`
position: relative;
height: 100%;
width: calc(100% - 80px);
min-width: calc(100% - 80px);
margin: 0 20px;
background-color: ${(props) => props.theme.colors.offWhite};
border-radius: 50px;
display: flex;
flex-direction: column;
padding: 25px !important;
h2 {
    font-weight: 800;
    color: ${(props) => props.theme.colors.primaryColor};
    text-align: center;
    margin-bottom: 20px;
}
`