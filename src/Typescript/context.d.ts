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
    id: string
    modalController: {
        toggleModal: () => void
        handleId: (id: string) => void
    }
}

interface IModalContextProviderProps {
    children: ReactNode
}