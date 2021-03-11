import styled from "styled-components";

export const Wrapper = styled.div`
    width: 86vw;
    height: 96vh;
    display: flex;
    justify-content: flex-end;
`

export const NavContainer = styled.div`
    width: 40%;
    height: 100%;
    background: ${({theme}) => theme.colors.two};
    border-radius: ${({theme}) => theme.radius.curvy};
    padding: 1rem;
    right: 0;
`