import FeedView from "./FeedView";
import { Wrapper } from "./styles";
import CardModal from "./CardModal";
import { IPhotoFeedProps } from "../../../Typescript/components";

export default function PhotoFeed({timelineData}: IPhotoFeedProps) {
  return (
    <>
      <CardModal />
      <Wrapper>
        <FeedView timelineData={timelineData}/>
      </Wrapper>
    </>
  );
}
