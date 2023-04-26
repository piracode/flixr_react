import "./scss/styles.scss";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Buttons from "./components/Buttons";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import About from "./pages/About";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar
            homeLink={
              <NavLink className="nav-logo" to="/">
                flixr
              </NavLink>
            }
            otherLinks={[
              <NavLink className="nav-links" to="/about">
                about
              </NavLink>,
              <NavLink className="nav-links" to="/favourites">
                favourites
              </NavLink>,
            ]}
          />
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
      <Hero />
      <Buttons />
      <Movies />
      <Footer />
    </>
  );
}

export default App;
