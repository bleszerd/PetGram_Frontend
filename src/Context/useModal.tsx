import { useState, createContext, useContext } from 'react'
import { IModalContextProviderProps, IModalContext } from '../Typescript/context'

const ModalContext = createContext<IModalContext>({} as IModalContext)

export function ModalContextProvider({ children }: IModalContextProviderProps) {
    const [opened, setOpened] = useState(false)
    const [id, setId] = useState('')

    function toggleModal(){
        setOpened(!opened)
    }

    function handleId(id: string){
        setId(id)
    }

    return (
        <ModalContext.Provider
            value={{
                opened,
                id,
                modalController: {
                    toggleModal,
                    handleId
                }
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export function useModal(){
    const context = useContext(ModalContext)
    const {opened, id, modalController} = context
    
    return {opened, id, modalController}
}