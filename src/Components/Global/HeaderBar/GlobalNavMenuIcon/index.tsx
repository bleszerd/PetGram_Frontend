import { Wrapper, NotificationButton } from "./styles";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function GlobalNavMenuIcon() {
  return (
    <Wrapper>
      <NotificationButton>
        <BsFillGrid3X3GapFill onClick={() => alert("Menu")} />
      </NotificationButton>
    </Wrapper>
  );
}
