import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <main>{children}</main>
    </>
  );
}
