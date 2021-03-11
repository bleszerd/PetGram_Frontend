import {DefaultTheme} from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string,
            one: string,
            two: string,
            three: string,
            text: string,
            textLigth: string,
            textWhite: string
        },
        radius: {
            curvy: string
        }
    }
}

const defaultTheme: DefaultTheme = {
    colors: {
        background: "#C4C4C4",
        one: "#ffffff",
        two: "#696969",
        three: "#C4C4C4",
        text: "#0e0e0e",
        textLigth: "rgba(0, 0, 0, .5)",
        textWhite: "#ebebeb"
    },
    radius: {
        curvy: "1.7rem"
    }
}

export {
    defaultTheme
}