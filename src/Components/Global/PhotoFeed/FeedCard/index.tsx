import { useModal } from '../../../../Context/useModal'
import {Wrapper, Image} from './styles'

export default function FeedCard({cardData}: IFeedCardProps){
    const {modalController} = useModal()

    return (
        <Wrapper onClick={modalController.toggleModal} id={cardData.id}>
            <Image src={cardData.photo}/>
        </Wrapper>
    )
}