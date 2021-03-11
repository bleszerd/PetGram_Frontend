import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfilePicture = styled.div`
    width: 13rem;
    height: 13rem;
    border-radius: 180px;
    background: ${({theme}) => theme.colors.one};
`

export const Name = styled.p`
    margin: 1rem 0 0 0;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.text};
`

export const Username = styled.p`
    font-weight: 500;
    font-size: .9rem;
    color: ${({theme}) => theme.colors.textLigth};
`

export const FollowersSection = styled.section`
    display: flex;
    height: auto;
    width: 80%;
    justify-content: center;
    align-items: center;
`

export const FollowersWrapper = styled.div`
    margin: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Count = styled.p`
    color: ${({theme}) => theme.colors.textWhite};
    font-size: 2rem;
    font-weight: 700;
`

export const Label = styled.p`
    font-weight: 500;
    font-size: .9rem;
    color: ${({theme}) => theme.colors.textLigth};
`

export const Splitter = styled.hr`
    height: 2rem;
    margin: 2rem 0 0 0;
    border: solid ${({theme}) => theme.colors.textLigth} 1px;
`