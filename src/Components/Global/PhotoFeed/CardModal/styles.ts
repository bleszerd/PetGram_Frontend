import styled from "styled-components";

export const Wrapper = styled.div<ICardModalWrapper>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${({opened}) => opened ? 'visible' : 'hidden'};
    opacity: ${({opened}) => opened ? 1 : 0};
    transition: visibility .4s, opacity .4s ease-in-out;
`
export const BackgroundEffect = styled.div`
    background: rgba(0, 0, 0, .8);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
`

export const Modal = styled.div`
    width: 80vw;
    height: 92vh;
    display: flex;
    z-index: 5;
`

export const CardImage = styled.img`
    width: 68%;
    height: 100%;
    object-fit: contain;
    background: black;
    border: solid black 1px;
    border-radius: .5rem 0 0 .5rem;
`

export const CardDetailsSection = styled.div`
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.colors.one};
    border-radius: 0 .5rem .5rem 0;
`

export const ProfileSection = styled.section`
    padding: 1rem;
    display: flex;
`

export const ProfilePicture = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    background: ${({theme}) => theme.colors.two};
    border-radius: 1rem;
`

export const NameUsernameContainer = styled.div`
    margin: 0 0 0 1rem;
    display: flex;
    flex-direction: column;
`

export const Name = styled.p`
    margin: 1rem 0 0 0;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
`

export const Username = styled.p`
    font-weight: 500;
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.textLigth};
`

export const CardText = styled.p`
    padding: 0 1rem 1rem 1rem;
    font-size: .8rem;
    color: ${({theme}) => theme.colors.text};
    max-height: 12rem;
`

export const CommentsSection = styled.div`
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 14.1rem);
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

export const CloseModalButton = styled.button`
    position: absolute;
    right: 11vw;
    top: 4.8vh;
    background: none;
    border: none;
    font-weight: 700;
    font-size: 1.5rem;
    outline: none;
    color: ${({theme}) => theme.colors.textLigth};
`