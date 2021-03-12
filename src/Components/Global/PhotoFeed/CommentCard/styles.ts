import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 1rem 0 0 0;
    padding: .5rem;
    border: ridge ${({ theme }) => theme.colors.textLigth} 2px;
    width: 100%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
`
export const ProfileSection = styled.section`
    display: flex;
`
export const NameUsernameContainer = styled.div`
    margin: 0 0 0 1rem;
    display: flex;
    flex-direction: column;
    flex: 3;
`

export const Name = styled.p`
    font-weight: 600;
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.text};
`

export const Username = styled.p`
    font-weight: 500;
    font-size: .6rem;
    color: ${({ theme }) => theme.colors.textLigth};
`
export const ProfilePicture = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: .5rem;
    background: ${({theme}) => theme.colors.two};
`
export const Comment = styled.p`
    font-size: .8rem;
    padding: 1rem 1rem 1rem .2rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
`

export const ActionsSection = styled.div`
    justify-self: flex-end;
    display: flex;
    justify-content: flex-end;
    margin: .5rem 1rem 0 0;
    color: ${({ theme }) => theme.colors.text};
    
    :hover {
        color: red;
    }
`