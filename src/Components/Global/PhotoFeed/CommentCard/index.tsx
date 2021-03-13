import { Wrapper, NameUsernameContainer, Username, Name, ProfilePicture, Comment, ProfileSection, ActionsSection } from './styles'
import { BsHeart } from 'react-icons/bs'

export default function CommentCard() {
    return (
        <Wrapper>
            <ProfileSection>
                <ProfilePicture />
                <NameUsernameContainer>
                    <Name>Vinícius Resende</Name>
                    <Username>@bleszerd</Username>
                </NameUsernameContainer>
                <ActionsSection>
                    <BsHeart onClick={() => alert("Liked")} />
                </ActionsSection>
            </ProfileSection>

            <Comment>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Comment>
        </Wrapper>
    )
}