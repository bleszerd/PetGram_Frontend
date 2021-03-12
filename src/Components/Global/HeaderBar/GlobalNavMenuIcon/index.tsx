import { Wrapper, NotificationButton } from "./styles";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {useNavbar} from '../../../../Context/useNavbar'

export default function GlobalNavMenuIcon() {
  const {navbarController} = useNavbar()

  return (
    <Wrapper onClick={navbarController.toggleNavbar}>
      <NotificationButton>
        <BsFillGrid3X3GapFill />
      </NotificationButton>
    </Wrapper>
  );
}
