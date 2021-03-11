import FeedCard from "../FeedCard";
import { FeedGallery, Wrapper } from "./styles";

export default function FeedView() {
  return (
    <Wrapper>
      <FeedGallery>
      <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedGallery>
    </Wrapper>
  );
}
