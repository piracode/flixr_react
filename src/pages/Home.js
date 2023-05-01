import Buttons from './../components/Buttons'
import Movies from './../components/Movies'
import { useState } from 'react'
import Hero from './../components/Hero'

const Home = ({ chosenCategory, onCategoryButtonClick }) => {
  // const [chosenCategory, setChosenCategory] = useState('popular');

  return (
    <>
      <Hero />
      <Buttons
        onButtonClick={onCategoryButtonClick}
        chosenCategory={chosenCategory}
        buttons_container_class='category-buttons-section'
      />
      <Movies chosenCategory={chosenCategory} />
    </>
  )
}

export default Home
