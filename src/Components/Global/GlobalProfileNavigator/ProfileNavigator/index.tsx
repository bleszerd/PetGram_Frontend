import {NavigatorButton, Wrapper} from './styles'

export default function ProfileNavigator(){
    return (
        <Wrapper>
            <NavigatorButton active>Início</NavigatorButton>
            <NavigatorButton>Atividade</NavigatorButton>
            <NavigatorButton>Descobrir</NavigatorButton>
        </Wrapper>
    )
}