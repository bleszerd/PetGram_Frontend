import {Wrapper} from './styles'
import LogoSection from './LogoSection'
import ProfileContent from '../GlobalProfileNavigator/ProfileContent'
import ProfileNavigator from '../GlobalProfileNavigator/ProfileNavigator'

export default function GlobalProfileNavigator(){
    return (
        <Wrapper>
            <LogoSection />
            <ProfileContent />
            <ProfileNavigator />
        </Wrapper>
    )
}