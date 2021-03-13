import AppContainer from '../Components/Global/AppContainer'
import GlobalProfileNavigator from '../Components/Global/GlobalProfileNavigator'
import HeaderBar from '../Components/Global/HeaderBar'
import PhotoFeed from '../Components/Global/PhotoFeed'
import { Container } from '../Components/Global/AppContainer/styles'
import GlobalNavbar from '../Components/Global/GlobalNavbar'
import CardModal from '../Components/Global/PhotoFeed/CardModal'

export default function AppPage() {
    return (
        <>
            <AppContainer>
                <CardModal />
                <GlobalNavbar />
                <Container>
                    <GlobalProfileNavigator />
                </Container>
                <Container>
                    <HeaderBar />
                    <PhotoFeed />
                </Container>
            </AppContainer>
        </>
    )
}