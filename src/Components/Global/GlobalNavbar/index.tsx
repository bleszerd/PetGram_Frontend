import { useNavbar } from '../../../Context/useNavbar'
import Navbar from './Navbar'
import { Wrapper } from './styles'

export default function GlobalNavbar() {
    const { opened, navbarController } = useNavbar()

    return (
        <Wrapper opened={opened}>
            <Navbar />
        </Wrapper>
    )
}