import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Themes/Theme.style";
import GlobalStyle from "./Themes/Global.style";
import AppPage from "./Pages/AppPage";
import { NavbarContextProvider } from './Context/useNavbar'
import { ModalContextProvider } from './Context/useModal'

export default function App() {
  return (
    <NavbarContextProvider>
      <ModalContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path={"/home"} component={AppPage} />
              <Route path={"/"} component={() => (<div>/ Dir</div>)} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ModalContextProvider>
    </ NavbarContextProvider>
  );
}
