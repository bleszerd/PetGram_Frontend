import {ProfilePicture, Wrapper, Name, Username, NameUsernameContainer} from './styles'

export default function ProfileSection(){
    return (
        <Wrapper>
            <ProfilePicture />
            <NameUsernameContainer>
                <Name>Vinícius Resende</Name>
                <Username>@bleszerd</Username>
            </NameUsernameContainer>
        </Wrapper>
    )
}