import { useState, createContext, useContext } from 'react'
import { INavbarContextProviderProps, INavbarContext } from '../Typescript/context'

const NavbarContext = createContext<INavbarContext>({} as INavbarContext)

export function NavbarContextProvider({ children }: INavbarContextProviderProps) {
    const [opened, setOpened] = useState(false)

    function toggleNavbar(){
        setOpened(!opened)
    }

    return (
        <NavbarContext.Provider
            value={{
                opened,
                navbarController: {
                    toggleNavbar
                }
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export function useNavbar(){
    const context = useContext(NavbarContext)
    const {opened, navbarController} = context
    
    return {opened, navbarController}
}