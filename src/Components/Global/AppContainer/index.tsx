import { IAppContainerProps } from '../../../Typescript/components'
import {Wrapper, AppBox} from './styles'

export default function AppContainer({children}: IAppContainerProps){
    return (
        <Wrapper>
            <AppBox>
                {children}
            </AppBox>
        </Wrapper>
    )
}