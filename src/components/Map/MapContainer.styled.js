import styled from "styled-components";

export const StyledMapContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    iframe {
        position: fixed;
        top: -150px;
        width: 100%;
        height: calc(100vh + 300px);
        border: none;
    }
`