import styled from "styled-components";

export const Wrapper = styled.aside<IGlobalNavbarWrapper>`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ opened }) => opened ? 1 : 0};
    z-index: 5;
    transition: opacity .4s, visibility .4s ease-in-out;
    visibility: ${({ opened }) => opened ? 'visible' : 'hidden'};
    overflow: hidden;
`