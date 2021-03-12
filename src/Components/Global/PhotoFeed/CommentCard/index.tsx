import { Wrapper, NameUsernameContainer, Username, Name, ProfilePicture, Comment, ProfileSection, ActionsSection } from './styles'
import {BsHeart} from 'react-icons/bs'

/*
"comments": [
    {
        "_id": "604b6c0c83da9b09dc54a861",
        "mentionedUser": "bleszerd",
        "text": "bleszerd que comentou"
    }
],
*/

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
                    <BsHeart onClick={() => alert("Liked")}/>
                </ActionsSection>
            </ProfileSection>

            <Comment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis esse quisquam. Illum, iure sunt earum sequi accusantium rerum modi vero natus! Nisi expedita esse obcaecati fugiat libero commodi quo?
            </Comment>
        </Wrapper>
    )
}