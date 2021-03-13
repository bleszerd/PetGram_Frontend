import { Wrapper, NameUsernameContainer, Username, Name, ProfilePicture, Comment, ProfileSection, ActionsSection } from './styles'
import {BsHeart} from 'react-icons/bs'
import { ICommentCardProps } from '../../../../Typescript/components'
import { useEffect, useState } from 'react'
import { requests } from '../../../../Services/Requests'

export default function CommentCard({comment}: ICommentCardProps) {
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    
    useEffect(()=>{
        async function fetchData(){
            const response = await requests.findUserByUsername({
                username: comment.mentionedUser
            })

            setProfile(response.response[0].profile)
        }

        fetchData()
    }, [])
    
    return (
        <Wrapper>
            <ProfileSection>
                <ProfilePicture />
                <NameUsernameContainer>
                    <Name>{profile.name || ''}</Name>
                    <Username>@{comment.mentionedUser}</Username>
                </NameUsernameContainer>
                <ActionsSection>
                    <BsHeart onClick={() => alert("Liked")}/>
                </ActionsSection>
            </ProfileSection>

            <Comment>{comment.text}</Comment>
        </Wrapper>
    )
}