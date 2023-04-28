import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Search from "./Search";

//Modified navigation from https://github.com/moses-netshitangan...
const Navbar = ({ homeLink, otherLinks }) => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav className="nav">
        <h1>{homeLink}</h1>

        {/* Destop Nav */}
        <div className={`nav-desktop`}>
          <ul className="nav-desktop-container">
            {otherLinks?.map((link, index) => (
              <li className="nav-list" key={index}>
                {link}
              </li>
            ))}
          </ul>
          <Search />
        </div>
        {/* Desktop Nav END */}

        {/* Mobile Nav */}
        <div
          className="burger-menu"
          onClick={updateMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuClicked}
          tabIndex="0"
          aria-haspopup="true"
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        {/* Mobile Nav END */}
      </nav>

      {/* Mobile Nav */}
      <div
        className={`${menu_class} navButton`}
        role="navigation"
        aria-expanded={isMenuClicked}
      >
        <ul className="nav-container">
          {otherLinks?.map((link, index) => (
            <li className="nav-list" key={index}>
              {link}
            </li>
          ))}
          <Buttons buttons_container_class="nav-buttons-section category-buttons-section" />
        </ul>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
