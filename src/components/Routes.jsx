import MainLayout from "../layouts/MainLayout";
import SecLayout from "../layouts/SecLayout";
import Home from "./Home";

import Wishlist from "./Wishlist";
import Cart from "./Cart";
import UserDashboard from "./UserDashboard";
import Categories from "./Categories";
import GetStarted from "./GetStarted";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ThirdLayout from "../layouts/ThirdLayout";
import FourthLayout from "../layouts/FourthLayout";
import FifthLayout from "../layouts/FifthLayout";
import Product from "./Product";

export const menuRoutes = [
  {
    path: "/home",
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: "/categories",
    element: <Categories />,
    layout: SecLayout,
  },
  {
    path: "/cart",
    element: <Cart />,
    layout: FifthLayout,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    layout: ThirdLayout,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
    layout: ThirdLayout,
  },
  {
    path: "/",
    element: <GetStarted />,
    layout: FourthLayout,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    layout: FourthLayout,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    layout: FourthLayout,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    layout: FourthLayout,
  },
  {
    path: "/product",
    element: <Product />,
    layout: FourthLayout,
  },
];
