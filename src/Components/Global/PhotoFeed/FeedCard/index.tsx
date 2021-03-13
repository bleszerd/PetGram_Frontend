import { useModal } from '../../../../Context/useModal'
import {Wrapper, Image} from './styles'

export default function FeedCard(){
    const {modalController} = useModal()

    return (
        <Wrapper onClick={modalController.toggleModal}>
            <Image src="images/feed/cat1.jpg"/>
        </Wrapper>
    )
}