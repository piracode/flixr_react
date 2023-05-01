import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'
import Search from './Search'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({
  homeLink,
  otherLinks,
  onCategoryButtonClick,
  chosenCategory,
}) => {
  // debugger
  // const location = useLocation()
  const navigate = useNavigate()
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  // const [chosenCategory, setChosenCategory] = useState('popular')

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
    // do various things, close the menu, etc.
    onCategoryButtonClick(event)
    closeMenu()
    navigate(`/`)
  }

  return (
    <>
      <nav className='nav'>
        <h1>{homeLink}</h1>

        {/* Destop Nav */}
        <div className={`nav-desktop`}>
          <ul className='nav-desktop-container'>
            {otherLinks?.map((link, index) => (
              <li className='nav-list' key={index}>
                {link}
              </li>
            ))}
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
          {otherLinks?.map((link, index) => (
            <li className='nav-list' key={index}>
              {link}
            </li>
          ))}
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
