import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ onCategoryButtonClick, chosenCategory }) => {
  const navigate = useNavigate()
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const closeMenu = () => {
    setBurgerClass('burger-bar unclicked')
    setMenuClass('menu hidden')
    setIsMenuClicked(false)
  }

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    } else {
      closeMenu()
    }
    setIsMenuClicked(!isMenuClicked)
  }

  //close navigation on search submit
  const handleSearchSubmit = (searchValue) => {
    closeMenu()
    // navigate to the search results page
    navigate(`/searchResults?query=${searchValue}`)
  }

  const handleButtonClick = (event) => {
    onCategoryButtonClick(event)
    closeMenu()
    navigate(`/`)
  }

  return (
    <>
      <nav className='nav'>
        <h1>
          <NavLink onClick={() => closeMenu()} className='nav-logo' to='/'>
            flixr
          </NavLink>
        </h1>

        {/* Destop Nav */}
        <div className={`nav-desktop`}>
          <ul className='nav-desktop-container'>
            <NavLink className='nav-links' to='/about'>
              about
            </NavLink>
            <NavLink className='nav-links' to='/favourites'>
              favourites
            </NavLink>
          </ul>
          <Search onSearchSubmit={handleSearchSubmit} />
        </div>

        {/* Mobile Nav */}
        <div
          className='burger-menu'
          onClick={updateMenu}
          aria-label='Toggle Navigation Menu'
          aria-expanded={isMenuClicked}
          tabIndex='0'
          aria-haspopup='true'
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div
        className={`${menu_class} navButton`}
        role='navigation'
        aria-expanded={isMenuClicked}
      >
        <ul className='nav-container'>
          <NavLink
            onClick={() => closeMenu()}
            className='nav-links'
            to='/about'
          >
            about
          </NavLink>
          <NavLink
            onClick={() => closeMenu()}
            className='nav-links'
            to='/favourites'
          >
            favourites
          </NavLink>
          <Buttons
            onButtonClick={handleButtonClick}
            chosenCategory={chosenCategory}
            buttons_container_class='nav-buttons-section category-buttons-section'
          />
        </ul>
        <Search onSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  )
}

export default Navbar
