import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import UserMenu from "../UserMenu/UserMenu";
import Styles from "./Header.module.css";
import { isAuthenticated } from "../../redux/selectors/authSelectors";

const Header = () => {
  const Authenticated = useSelector((state) => isAuthenticated(state));
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavLink
            to="/"
            exact
            className={Styles.link}
            activeClassName={Styles.activeLink}
          >
            Home
          </NavLink>
          {Authenticated ? (
            <>
              <NavLink
                to="/contacts"
                className={Styles.link}
                activeClassName={Styles.activeLink}
              >
                Contacts
              </NavLink>{" "}
              <UserMenu />{" "}
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={Styles.link}
                activeClassName={Styles.activeLink}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={Styles.link}
                activeClassName={Styles.activeLink}
              >
                Registration
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
