import React, { useEffect, useState } from "react";

import classes from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate("/page-cta");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <NavLink to="/" className={classes.header__content__logo}>
          navbar
        </NavLink>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <NavLink to="/page-one" onClick={menuToggleHandler}>
                PageOne
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-two" onClick={menuToggleHandler}>
                PageTwo
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-three" onClick={menuToggleHandler}>
                PageThree
              </NavLink>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <button onClick={menuToggleHandler}>!menuOpen</button>
          ) : (
            <button onClick={menuToggleHandler}> menuOpen</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
