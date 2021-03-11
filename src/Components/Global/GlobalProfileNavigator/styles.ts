import styled from 'styled-components'

export const Wrapper = styled.div`
    background: ${({theme}) => theme.colors.two};
    width: 100%;
    height: 100%;
    max-height: 96vh;
    border-radius: ${({theme}) => `${theme.radius.curvy} 0 0 ${theme.radius.curvy}`};
    display: flex;
    flex-direction: column;
`