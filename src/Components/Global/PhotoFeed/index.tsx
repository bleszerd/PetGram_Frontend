import FeedView from "./FeedView";
import { Wrapper } from "./styles";
import CardModal from "./CardModal";

export default function PhotoFeed() {
  return (
    <>
      <CardModal />
      <Wrapper>
        <FeedView />
      </Wrapper>
    </>
  );
}
