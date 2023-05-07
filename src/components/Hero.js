import { useState, useEffect } from 'react'
import useFetch from './../utilities/toolbelt'
import { API_KEY } from './../utilities/api'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import question from './../assets/question-mark.svg'

const Hero = () => {
  const { get } = useFetch('https://api.themoviedb.org/3/movie/')
  const [movies, setMovies] = useState([])
  // const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((data) => {

      })
      .catch((error) => console.log(error))
  }, [])
  // })


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // beforeChange: (current, next) => setActiveSlide(next),
    // initialSlide: activeSlide,
  }

  return (

      </div>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={movie.title}
        className='hero-image'
      />
    </div>
  ))}
</Slider>
 */}
    </section>
  )
}

export default Hero
