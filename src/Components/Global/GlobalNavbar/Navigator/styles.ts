import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 0 0 2rem;
    display: flex;
    height: 65%;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 2rem 0;
`

export const NavigatorButtons = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavigatorButton = styled.a<INavigatorButton>`
    font-size: 2.2rem;
    font-weight: 800;
    color: ${({theme, active}) => active ? theme.colors.textWhite : theme.colors.text};
`