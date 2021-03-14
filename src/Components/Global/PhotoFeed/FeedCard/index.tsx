import { useModal } from '../../../../Context/useModal'
import {Wrapper, Image} from './styles'

export default function FeedCard({cardData}: IFeedCardProps){
    const {modalController} = useModal()

    function handleModalOpen(){
        modalController.handleId(cardData.id)
        modalController.toggleModal()
    }

    return (
        <Wrapper onClick={handleModalOpen} id={cardData.id}>
            <Image src={cardData.photo}/>
        </Wrapper>
    )
}