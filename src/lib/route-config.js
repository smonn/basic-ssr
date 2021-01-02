import Index from "../pages";
import NotFound from "../pages/404";
import About from "../pages/About";
import Confirmation from "../pages/confirmation";
import Register from "../pages/register";

// Routes without a label won't show in navigation.
const routeConfig = [
  {
    path: "/",
    label: "Home",
    component: Index,
    exact: true,
  },
  {
    path: "/about",
    label: "About",
    component: About,
  },
  {
    path: "/register",
    label: "Register",
    component: Register,
  },
  {
    path: "/confirmation",
    component: Confirmation,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routeConfig;
