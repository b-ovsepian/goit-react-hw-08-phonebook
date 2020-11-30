import { lazy } from "react";

export const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(
      () => import("./Containers/Home/Home") /* webpackChunkName: "home-page" */
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(
      () =>
        import("./Containers/Login/Login") /* webpackChunkName: "login-page" */
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/register",
    label: "Registration",
    exact: true,
    component: lazy(
      () =>
        import(
          "./Containers/Registration/Registration"
        ) /* webpackChunkName: "registration-page" */
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(
      () =>
        import(
          "./Containers/Contacts/Contacts"
        ) /* webpackChunkName: "contacts-page" */
    ),
    private: true,
    restricted: false,
  },
];
