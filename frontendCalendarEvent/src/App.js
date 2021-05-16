import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import { AuthProvider } from './components';
import { Home, Login, Cadastro } from './pages';



function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
      </AuthProvider>
    </Router>
  )
}
export default App;
