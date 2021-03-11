import { IFeedCard, IFeedViewProps } from "../../../../Typescript/components";
import FeedCard from "../FeedCard";
import { FeedGallery, Wrapper } from "./styles";

export default function FeedView({ data }: IFeedViewProps) {
  return (
    <Wrapper>
      <FeedGallery>
        {data.map(card => {
          return (
            <FeedCard card={card} key={card._id}/>
          )
        })}
      </FeedGallery>
    </Wrapper>
  );
}
