import Button from "./Button";

const Buttons = ({
  onButtonClick,
  chosenCategory,
  buttons_container_class,
}) => {
  const categories = [
    {
      id: "popular",
      categoryName: "Popular",
    },
    {
      id: "top_rated",
      categoryName: "Top Rated",
    },
    {
      id: "now_playing",
      categoryName: "Now Playing",
    },
    {
      id: "upcoming",
      categoryName: "Upcoming",
    },
  ];

  return (
    <section className={buttons_container_class}>
      <ul className="buttons-container ">
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              id={category.id}
              categoryName={category.categoryName}
              onButtonClick={onButtonClick}
              className={
                chosenCategory === category.id
                  ? "active category-buttons nav-button"
                  : "category-buttons nav-button"
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Buttons;
