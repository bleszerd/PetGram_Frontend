import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const NotificationButton = styled.button`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${({theme}) => theme.colors.two};
    border: none;
    background: none;
    outline: none;
`