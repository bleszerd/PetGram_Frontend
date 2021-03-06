import FeedView from "./FeedView";
import { Wrapper } from "./styles";
import CardModal from "./CardModal";
import { IPhotoFeedProps } from "../../../Typescript/components";

export default function PhotoFeed({ timelineData, user }: IPhotoFeedProps) {
  console.log(user);
  return (
    <>
      <CardModal profileData={user}/>
      <Wrapper>
        <FeedView timelineData={timelineData} />
      </Wrapper>
    </>
  );
}
