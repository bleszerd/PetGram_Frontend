import {Wrapper} from './styles'
import LogoSection from './LogoSection'
import ProfileContent from '../GlobalProfileNavigator/ProfileContent'
import ProfileNavigator from '../GlobalProfileNavigator/ProfileNavigator'
import { IGlobalProfileNavigatorProps } from '../../../Typescript/components'

export default function GlobalProfileNavigator({userData}: IGlobalProfileNavigatorProps){
    return (
        <Wrapper>
            <LogoSection />
            <ProfileContent userData={userData.user} followersData={userData.followers}/>
            <ProfileNavigator />
        </Wrapper>
    )
}