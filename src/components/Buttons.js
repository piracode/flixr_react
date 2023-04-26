import Button from './Button';
import TestAPI from '../utilities/api';

const Buttons = () => {
	const categories = [
		{
			id: 'popular',
			categoryName: 'Popular',
		},
		{
			id: 'top-rated',
			categoryName: 'Top Rated',
		},
		{
			id: 'now-playing',
			categoryName: 'Now Playing',
		},
		{
			id: 'upcoming',
			categoryName: 'Upcoming',
		},
	];

	return (
		<section className="category-buttons-section">
			<ul>
				{categories.map(category => (
					<li key={category.id}>
						<Button id={category.id} categoryName={category.categoryName} />
					</li>
				))}
			</ul>
			<TestAPI />
		</section>
	);
};

export default Buttons;
