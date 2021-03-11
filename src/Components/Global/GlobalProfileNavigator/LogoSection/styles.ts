import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 10%;
    padding: 0 0 0 1rem;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 .4rem 0 0;
`

export const LogoTitle = styled.h1`
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.textWhite};
`