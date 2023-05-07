import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//
const Search = ({ onSearchSubmit }) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const searchValue = e.target.elements['search-input'].value
    setSearchInputValue(searchValue)
    // onSearchSubmit(searchValue) //????
    navigate(`/searchResults?query=${searchValue}`)

    e.target.reset()
  }

  return (
    <>
      <form
        action='/search'
        method='get'
        className='search search__form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='search-input' className='visually-hidden search__label'>
          Search for a movie:
        </label>
        <div className='search__container'>
          <input
            type='text'
            id='search-input'
            name='search-input'
            className='search__input'
            placeholder='Movie title...'
          />
          <button type='submit' className='search__svg'></button>
        </div>
      </form>
    </>
  )
}

export default Search
