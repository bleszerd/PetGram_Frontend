import { useEffect, useState } from 'react'
import { useModal } from '../../../../Context/useModal'
import CommentCard from '../CommentCard'
import { CardDetailsSection, CardImage, Modal, Wrapper, ProfileSection, Name, NameUsernameContainer, ProfilePicture, Username, CardText, CommentsSection, CloseModalButton, BackgroundEffect, Loading } from './styles'
import {requests} from '../../../../Services/Requests'

export default function CardModal() {
    const [post, setPost] = useState<IPost>({} as IPost)
    const [loading, setLoading] = useState(false)
    const { opened, id, modalController } = useModal()

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            if(id){
                const response = await requests.getPostById({
                    id: id
                })

                setPost(response.response.posts)
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    return (
        <Wrapper opened={opened}>
            <BackgroundEffect onClick={modalController.toggleModal} />
            <Modal>
                <CloseModalButton onClick={modalController.toggleModal}>X</CloseModalButton>
                {!loading ? <CardImage src={post.photo} /> : <Loading />}
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
                        {post.comments?.map(comment => {
                            return (
                                <CommentCard comment={comment}/>
                            )
                        })}
                    </CommentsSection>
                </CardDetailsSection>
            </Modal>
        </Wrapper>
    )
}