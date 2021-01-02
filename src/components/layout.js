import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import routeConfig from "../lib/route-config";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        {routeConfig
          .filter((route) => !!route.label)
          .map((route, index) => (
            <Fragment key={route.path}>
              {index > 0 ? <span aria-hidden> | </span> : null}
              <NavLink to={route.path} exact={route.exact}>
                {route.label}
              </NavLink>
            </Fragment>
          ))}
      </nav>
      <main>{children}</main>
    </>
  );
}
