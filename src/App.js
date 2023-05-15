import './scss/styles.scss';
import { APP_FOLDER_NAME } from './globals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Header from './components/Header'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//pages
import About from './pages/About';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import { useState } from 'react';

function App() {
	const [chosenCategory, setChosenCategory] = useState('popular');

	function handleCategoryButtonClick(e) {
		let clickedCategory = e.target.id;
		setChosenCategory(clickedCategory);
	}

	return (
		<div className="site-wrapper">
			<BrowserRouter basename={`${APP_FOLDER_NAME}`}>
				<header className="header">
					<Navbar
						chosenCategory={chosenCategory}
						onCategoryButtonClick={handleCategoryButtonClick}
					/>
				</header>
				<main>
					<Routes>
						<Route
							path="/"
							exact
							element={
								<Home
									chosenCategory={chosenCategory}
									onCategoryButtonClick={handleCategoryButtonClick}
								/>
							}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/favourites" element={<Favourites />} />
						<Route path="/movieDetails" element={<MovieDetails />} />
						<Route path="/searchResults" element={<SearchResults />} />
					</Routes>
				</main>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
