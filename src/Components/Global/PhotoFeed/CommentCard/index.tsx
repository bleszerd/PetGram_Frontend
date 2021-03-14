import { Wrapper, NameUsernameContainer, Username, Name, ProfilePicture, Comment, ProfileSection, ActionsSection } from './styles'
import { BsHeart } from 'react-icons/bs'
import { ICommentCardProps } from '../../../../Typescript/components'
import { useEffect, useState } from 'react'
import {requests} from '../../../../Services/Requests'

export default function CommentCard({comment}: ICommentCardProps) {
    const [userData, setUserData] = useState<IUserProfile>({} as IUserProfile)

    useEffect(()=>{
        async function fetchUserData(){
            const response = await requests.findUserByUsername({
                username: comment.mentionedUser
            })

            setUserData(response)
        }

        fetchUserData()
    }, [])    
    
    return (
        <Wrapper>
            <ProfileSection>
                <ProfilePicture />
                <NameUsernameContainer>
                    <Name>{userData.profile && userData.profile.name}</Name>
                    <Username>@{comment.mentionedUser}</Username>
                </NameUsernameContainer>
                <ActionsSection>
                    <BsHeart onClick={() => alert("Liked")} />
                </ActionsSection>
            </ProfileSection>

            <Comment>{comment.text}</Comment>
        </Wrapper>
    )
}