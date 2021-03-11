import { NavigatorButton, NavigatorButtons, Wrapper } from './styles'

export default function Navigator() {
    return (
        <Wrapper>
            <NavigatorButtons>
                <NavigatorButton active>Início</NavigatorButton>
                <NavigatorButton>Meu perfil</NavigatorButton>
                <NavigatorButton>Atividade</NavigatorButton>
                <NavigatorButton>Descobrir</NavigatorButton>
                <NavigatorButton>Salvos</NavigatorButton>
            </NavigatorButtons>
            <NavigatorButtons>
                <NavigatorButton>Sair</NavigatorButton>
            </NavigatorButtons>
        </Wrapper>
    )
}