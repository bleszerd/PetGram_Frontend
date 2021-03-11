import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Themes/Theme.style";
import GlobalStyle from "./Themes/Global.style";
import AppPage from "./Pages/AppPage";
import {NavbarContextProvider} from './Context/useNavbar'

export default function App() {
  return (
    <NavbarContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path={"/home"} component={AppPage} />
            <Route path={"/"} component={() => (<div>/ Dir</div>)} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ NavbarContextProvider>
  );
}
