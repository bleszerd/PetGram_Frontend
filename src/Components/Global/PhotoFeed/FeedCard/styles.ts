import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    
    :first-child{
        grid-column-start: span 2;
        grid-row-start: span 2;
        border-radius: .5rem 0 0 0;
    }
    :nth-child(2n+3){
        grid-row-start: span 2;
    }
    :nth-child(4n+5){
        grid-row-start: span 2;
        grid-column-start: span 2;
    }
    :nth-child(6n+7){
        grid-row-start: span 2;
    }
    :nth-child(8n+9){
        grid-row-start: span 1;
        grid-column-start: span 1;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`