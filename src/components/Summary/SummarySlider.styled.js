import styled from "styled-components";

export const StyledSummarySlider = styled.div`
    margin-bottom: 25px !important;
    margin-left: -25px !important;
    width: calc(100% + 50px);
    .slick-dots {
        bottom: -5px;
    }
    .slick-dots li {
        margin: 0 -3px;
    }
    .slick-dots li button:before {
        font-size: 8px;
    }
`