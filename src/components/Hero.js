import { useState, useEffect } from 'react'
import useFetch from './../utilities/toolbelt'
import { API_KEY } from './../utilities/api'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Hero = () => {
  const { get } = useFetch('https://api.themoviedb.org/3/movie/')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((data) => {
        setMovies(data.results)
        console.log(data.results)
      })
      .catch((error) => console.log(error))
  }, [])
  // })

  const posterPaths = movies.map((movie) => movie.backdrop_path)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  }

  return (
    <section className='hero'>
      <Slider {...sliderSettings}>
        {posterPaths.slice(0, 3).map((path, index) => {
          const movie = movies[index]
          const truncatedText = movie.overview.slice(0, 110) + '...'
          return (
            <div key={`poster-${index}`} className='hero-image-container'>
              <div className='hero-info'>
                <h2 className='hero-info-movie-title'>{movie.title}</h2>
                <p className='hero-info-movie-description'>{truncatedText}</p>
                <div className='hero-info-button-container'>
                  <button className='hero-info-button'>Learn More</button>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${path}`}
                alt={`Movie Poster ${index + 1}`}
                className='hero-image'
              />
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default Hero
