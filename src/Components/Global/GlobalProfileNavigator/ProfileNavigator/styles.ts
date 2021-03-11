import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1rem 0 3rem 1.8rem;
`

export const NavigatorButton = styled.a<INavigatorButton>`
    font-size: 2.4rem;
    font-weight: 800;
    color: ${({theme, active}) => active ? theme.colors.textWhite : theme.colors.text};
`