import { IFeedCard, IFeedViewProps } from "../../../../Typescript/components";
import FeedCard from "../FeedCard";
import { FeedGallery, Wrapper } from "./styles";

export default function FeedView() {
  return (
    <Wrapper>
      <FeedGallery>
        <FeedCard />
      </FeedGallery>
    </Wrapper>
  );
}
