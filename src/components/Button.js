const Button = ({ id, categoryName }) => {
  return (
    <div className="button-container">
      <button className="category-buttons nav-button" id={id}>
        {categoryName}
      </button>
      <p className="button-label">{categoryName}</p>
    </div>
  );
};

export default Button;
