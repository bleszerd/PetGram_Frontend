import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-height: 100%;
    overflow: auto;

    ::-webkit-scrollbar{
        width: 8px;
        background: ${({theme}) => theme.colors.three}; 
        border-radius: .25rem;
    }
    ::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.colors.two}; 
        border-radius: .25rem;
    }
`

export const FeedGallery = styled.div`
    padding: 0 .2rem 0 0;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 0.2rem;
    grid-auto-flow: dense;
`

