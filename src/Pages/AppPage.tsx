import { useEffect, useState } from 'react'
import GlobalProfileNavigator from '../Components/Global/GlobalProfileNavigator'
import AppContainer from '../Components/Global/AppContainer'
import HeaderBar from '../Components/Global/HeaderBar'
import PhotoFeed from '../Components/Global/PhotoFeed'
import GlobalNavbar from '../Components/Global/GlobalNavbar'
import CardModal from '../Components/Global/PhotoFeed/CardModal'
import { Container } from '../Components/Global/AppContainer/styles'
import { requests } from '../Services/Requests'

export default function AppPage() {
    const [userData, setUserData] = useState({} as IUserData)

    useEffect(() => {
        //Fetch user info
        async function fetchUserData() {
            const response = await requests.findUserByUsername({
                username: "bleszerd"
            })

            return response
        }

        //Fetch followers info
        async function fetchFollowersData() {
            const response = await requests.findFollowersByUsername({
                username: "bleszerd"
            })

            return response
        }

        async function fetchTimelineData(){
            const response = await requests.findTimelineByUsername({
                username: "bleszerd"
            })

            return response
        }

        //Perform requests
        async function performActionRequests() {
            setUserData({
                user: await fetchUserData(),
                followers: await fetchFollowersData(),
                timeline: await fetchTimelineData()
            })
        }

        performActionRequests()
    }, [])

    return (
        <>
            <AppContainer>
                <GlobalNavbar />
                <Container>
                    <GlobalProfileNavigator userData={userData} />
                </Container>
                <Container>
                    <HeaderBar />
                    <PhotoFeed timelineData={userData.timeline} user={userData.user}/>
                </Container>
            </AppContainer>
        </>
    )
}