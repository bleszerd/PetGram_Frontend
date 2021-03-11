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