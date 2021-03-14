import { IPhotoFeedProps } from "../../../../Typescript/components";
import FeedCard from "../FeedCard";
import { FeedGallery, Wrapper } from "./styles";

export default function FeedView({ timelineData }: IPhotoFeedProps) {
  return (
    <Wrapper>
      <FeedGallery>
        {
          timelineData ?

            timelineData.map(card => {
              return (
                <FeedCard cardData={card}/>
              )
            })

            : <></>
        }
      </FeedGallery>
    </Wrapper>
  );
}
