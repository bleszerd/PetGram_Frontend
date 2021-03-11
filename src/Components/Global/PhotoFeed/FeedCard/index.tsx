import { FeedCardProps } from '../../../../Typescript/components'
import {Wrapper, Image} from './styles'

export default function FeedCard({card}: FeedCardProps){
    console.log(card);
    
    return (
        <Wrapper>
            <Image src={card.photo}/>
        </Wrapper>
    )
}

/*
comments: (3) [{…}, {…}, {…}]
date: "2021-03-10T13:25:13.354Z"
likes: 0
photo: "photoURL"
profile: "diego3g"
tags: (3) ["cat", "greeneyes", "cute"]
text: "Eu sou uma publicação de diego3g!"
    _id: "6048c8b97d0c5b1f489b46f3"
*/