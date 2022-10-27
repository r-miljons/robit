import styled from "styled-components";

export const StyledRideOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 45px !important;
    gap: 10px;
    h2 {
        color: ${props => props.theme.colors.white};
        text-align: center;
        margin-bottom: 23px;
    }
`