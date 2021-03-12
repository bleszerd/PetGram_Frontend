import styled from "styled-components";

export const Wrapper = styled.div`
    width: 86vw;
    height: 96vh;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`

export const NavContainer = styled.div<IGlobalNavbarNavContainer>`
    width: 40%;
    height: 100%;
    background: ${({theme}) => theme.colors.two};
    border-radius: ${({theme}) => theme.radius.curvy};
    padding: 1rem;
    right: 0;
    z-index: 5;
`

export const BackgroundEffect = styled.div`
    background: rgba(0, 0, 0, .8);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`