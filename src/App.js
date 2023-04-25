import "./scss/styles.scss";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Header from "./components/Header";

//pages
import About from "./pages/About";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  // return (
  //   <>
  //     <Header />
  // <Footer
  //   </>
  // );

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="favourites">Favourites</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movieDetails" element={<MovieDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Header />
    </>
  );
}

export default App;
