import Buttons from './../components/Buttons';
import Movies from './../components/Movies';
import { useState } from 'react';
import Hero from './../components/Hero';

const Home = () => {
	const [chosenCategory, setChosenCategory] = useState('popular');

	function handleCategoryButtonClick(e) {
		let clickedCategory = e.target.id;
		setChosenCategory(clickedCategory);
	}

	return (
		<>
			<Hero />
			<Buttons
				onButtonClick={handleCategoryButtonClick}
				chosenCategory={chosenCategory}
				buttons_container_class="category-buttons-section"
			/>
			<Movies chosenCategory={chosenCategory} />
		</>
	);
};

export default Home;
