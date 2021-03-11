import SearchSection from "./SearchSection";
import Notification from "./Notification";
import GlobalNavMenuIcon from "./GlobalNavMenuIcon";
import { ItemsGroup, Wrapper } from "./styles";

export default function HeaderBar() {
  return (
    <Wrapper>
      <SearchSection />
      <ItemsGroup>
        <Notification />
        <GlobalNavMenuIcon />
      </ItemsGroup>
    </Wrapper>
  );
}
