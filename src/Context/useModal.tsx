import { useState, createContext, useContext } from 'react'
import { IModalContextProviderProps, IModalContext } from '../Typescript/context'

const ModalContext = createContext<IModalContext>({} as IModalContext)

export function ModalContextProvider({ children }: IModalContextProviderProps) {
    const [opened, setOpened] = useState(false)

    function toggleModal(){
        setOpened(!opened)
    }

    return (
        <ModalContext.Provider
            value={{
                opened,
                modalController: {
                    toggleModal
                }
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export function useModal(){
    const context = useContext(ModalContext)
    const {opened, modalController} = context
    
    return {opened, modalController}
}