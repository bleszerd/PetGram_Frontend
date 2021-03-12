import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 35%;
    margin: 1rem 0 0 1.2rem;
`

export const ProfilePicture = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.three};
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
