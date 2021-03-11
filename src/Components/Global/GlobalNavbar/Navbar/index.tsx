import { useNavbar } from '../../../../Context/useNavbar'
import Navigator from '../Navigator'
import ProfileSection from '../ProfileSection'
import {NavContainer, Wrapper} from './styles'

export default function Navbar(){
    return (
        <Wrapper>
            <NavContainer>
                <ProfileSection />
                <Navigator />
            </NavContainer>
        </Wrapper>
    )
}