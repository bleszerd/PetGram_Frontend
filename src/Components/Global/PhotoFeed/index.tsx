import FeedView from "./FeedView";
import { Wrapper } from "./styles";
import { requests } from '../../../Services/Requests'
import { useEffect, useState } from "react";
import { IFeedCard } from "../../../Typescript/components";
import CardModal from "./CardModal";
import { useModal } from "../../../Context/useModal";

export default function PhotoFeed() {
  const [data, setData] = useState([] as IFeedCard[])

  useEffect(() => {
    async function fetchData() {
      const APIResponse = await requests.getFeedFromUser({
        username: 'bleszerd'
      })

      setData(APIResponse.response)
    }

    fetchData()
  }, [])

  return (
    <>
      <CardModal />
      <Wrapper>
        <FeedView data={data} />
      </Wrapper>
    </>
  );
}
