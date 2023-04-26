//navlinks?
//search?
import React, { useState } from "react";

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
    // <div style={{ width: "100%", height: "100vh" }}>
    <div>
      <nav className="nav">
        <h1>{homeLink}</h1>
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
      </nav>

      <div
        className={menu_class}
        role="navigation"
        aria-expanded={isMenuClicked}
      >
        <p className="test"> nav links</p>
        <ul>
          {otherLinks?.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
