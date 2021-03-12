import { useNavbar } from '../../../../Context/useNavbar'
import Navigator from '../Navigator'
import ProfileSection from '../ProfileSection'
import {NavContainer, Wrapper, BackgroundEffect} from './styles'

export default function Navbar(){
    const {opened, navbarController} = useNavbar()

    return (
        <Wrapper>
            <BackgroundEffect onClick={navbarController.toggleNavbar}/>
            <NavContainer opened={opened}>
                <ProfileSection />
                <Navigator />
            </NavContainer>
        </Wrapper>
    )
}