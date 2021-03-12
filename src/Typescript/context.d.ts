import { ReactNode } from "react";

//========= Navbar Context =========
interface INavbarContext {
    opened: boolean
    navbarController: {
        toggleNavbar: () => void
    }
}
interface INavbarContextProviderProps {
    children: ReactNode
}

interface IModalContext {
    opened: boolean
    modalController: {
        toggleModal: () => void
    }
}

interface IModalContextProviderProps {
    children: ReactNode
}