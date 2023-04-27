const Search = () => {
  return (
    <form action="/search" method="get" className="search search__form">
      <label htmlFor="search-input" className="visually-hidden search__label">
        Search:
      </label>
      {/* Should we add a search placeholder?  placeholder="Search..." */}
      <input
        type="search"
        id="search-input"
        name="q"
        className="search__input"
      />
    </form>
  );
};

export default Search;
