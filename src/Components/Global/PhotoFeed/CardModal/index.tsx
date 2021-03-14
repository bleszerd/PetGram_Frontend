import { useEffect, useState } from 'react'
import { useModal } from '../../../../Context/useModal'
import { requests } from '../../../../Services/Requests'
import { ICardModalProps } from '../../../../Typescript/components'
import CommentCard from '../CommentCard'
import { CardDetailsSection, CardImage, Modal, Wrapper, ProfileSection, Name, NameUsernameContainer, ProfilePicture, Username, CardText, CommentsSection, CloseModalButton, BackgroundEffect, Loading } from './styles'

export default function CardModal({profileData} : ICardModalProps) {
    const [postData, setPostData] = useState<IUserTimeline>({} as IUserTimeline)
    const { opened, id, modalController } = useModal()

    useEffect(()=>{
        async function fetchPostData(){
            const response = await requests.findPostById({
                id
            })

            setPostData(response)
        }

        fetchPostData()
    }, [id])

    return (
        <>
        {id ? <Wrapper opened={opened}>
            <BackgroundEffect onClick={modalController.toggleModal} />
            <Modal>
                <CloseModalButton onClick={modalController.toggleModal}>X</CloseModalButton>
                <CardImage src={postData && postData.photo} />
                <CardDetailsSection>
                    <ProfileSection>
                        <ProfilePicture />
                        <NameUsernameContainer>
                            <Name>{profileData && profileData.profile.name}</Name>
                            <Username>@{profileData && profileData.profile.username}</Username>
                        </NameUsernameContainer>
                    </ProfileSection>
                    <CardText>
                        <p>{postData && postData.text}</p>
                    </CardText>
                    <CommentsSection>
                        {
                            postData && postData.comments.map(comment => {
                                
                                return (
                                    <CommentCard comment={comment}/>
                                )
                            })
                        }
                    </CommentsSection>
                </CardDetailsSection>
            </Modal>
        </Wrapper>
        : opened && <Loading />}
        </>
    )
}