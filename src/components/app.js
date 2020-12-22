import { Route, Switch } from "react-router-dom";
import Index from "../pages";
import NotFound from "../pages/404";
import About from "../pages/About";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
