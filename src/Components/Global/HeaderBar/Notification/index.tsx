import { NotificationButton, Wrapper } from "./styles";
import { BsFillBellFill } from "react-icons/bs";

export default function Notification() {
  return (
    <Wrapper >
      <NotificationButton>
        <BsFillBellFill onClick={() => alert('Notifications')}/>
      </NotificationButton>
    </Wrapper>
  );
}
