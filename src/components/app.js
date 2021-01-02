import { Route, Switch } from "react-router-dom";
import routeConfig from "../lib/route-config";

export default function App() {
  return (
    <Switch>
      {routeConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}
