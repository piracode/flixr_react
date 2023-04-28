import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log("Submitted value:", inputValue);
  }

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     console.log("This is enter key");
  //     handleSubmit(e);
  //     // setInputValue("hi");
  //   }
  // }

  // function handleClick(e) {
  //   handleSubmit(e);
  // }

  // function handleChange(e) {
  //   setInputValue(e.target.value);
  //   console.log(e.target.className);

  // if (e.target.className === "search__input") {
  //   console.log("classname is search ionput");
  // } else if (e.target.className === "search__svg") {
  //   console.log("classname is svg");
  // }

  // console.log(inputValue);
  // }

  return (
    <>
      <form
        action="/search"
        method="get"
        className="search search__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-input" className="visually-hidden search__label">
          Search for a movie:
        </label>
        <input
          type="text"
          id="search-input"
          name="search-input"
          className="search__input"
          placeholder="Movie title..."
          // value={inputValue}
          // onChange={handleChange}
          // onClick={handleChange}
          // onKeyDown={handleKeyDown}
          // value={inputValue}
        />
        <button type="submit" className="search__svg"></button>
      </form>
    </>
  );
};

export default Search;
