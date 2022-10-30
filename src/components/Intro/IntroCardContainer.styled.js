import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: flex;
    transition: all 0.3s;
    transform: translateX(calc(-${props => props.currentSlideIndex}00%));
`