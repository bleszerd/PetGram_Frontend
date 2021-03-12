import { useModal } from '../../../../Context/useModal'
import CommentCard from '../CommentCard'
import { CardDetailsSection, CardImage, Modal, Wrapper, ProfileSection, Name, NameUsernameContainer, ProfilePicture, Username, CardText, CommentsSection, CloseModalButton, BackgroundEffect } from './styles'

export default function CardModal() {
    const { opened, modalController } = useModal()

    return (
        <Wrapper opened={!opened}>
            <BackgroundEffect onClick={modalController.toggleModal} />
            <Modal>
                <CloseModalButton onClick={modalController.toggleModal}>X</CloseModalButton>
                <CardImage src="images/feed/cat1.jpg" />
                <CardDetailsSection>
                    <ProfileSection>
                        <ProfilePicture />
                        <NameUsernameContainer>
                            <Name>Vinícius Resende</Name>
                            <Username>@bleszerd</Username>
                        </NameUsernameContainer>
                    </ProfileSection>
                    <CardText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae placeat ipsum aut temporibus quam dignissimos delectus fugiat quasi mollitia cum eveniet porro impedit debitis, atque ipsa dolore distinctio perferendis.</p>
                    </CardText>
                    <CommentsSection>
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </CommentsSection>
                </CardDetailsSection>
            </Modal>
        </Wrapper>
    )
}