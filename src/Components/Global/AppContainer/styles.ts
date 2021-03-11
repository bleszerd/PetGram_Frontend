import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AppBox = styled.div`
    width: 86vw;
    height: 96vh;
    background: ${({theme}) => theme.colors.one};
    border-radius: ${({theme}) => theme.radius.curvy};
    display: grid;
    grid-template-columns: 1fr 3.6fr;
`

export const Container = styled.div`
    max-height: 96vh;
`