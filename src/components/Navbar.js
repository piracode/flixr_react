//navlinks?
//search?
import React, { useState } from "react";

const Navbar = () => {
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
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div
          className="burger-menu"
          onClick={updateMenu}
          aria-label="Toggle Navigation Menu"
          //the aria-label attribute describes the purpose of the burger menu to screen readers.
          tabIndex="0"
          // tabIndex allows the burger menu to be docusable using the keyboard
          aria-expanded={isMenuClicked}
          //the aria expended attribute will indicate to screen readers if the menu is currently expanded or not.
          aria-haspopup="true"
          // This attribute will indicate to screen readers that the menu has a sub-menu and that interacting with it will reveal extra content
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class} role="navigation">
        {/* Thie role attribute will identify the menu as a navigation landmark to screen readers. */}
      </div>
    </div>
  );
};

export default Navbar;
