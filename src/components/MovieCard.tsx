import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import MovieCover from './cardComponents/MovieCover'
import MovieInfo from './cardComponents/MovieInfo'
import MovieSeats from './cardComponents/MovieSeats'
import MovieTechnology from './cardComponents/MovieTechnology'
import MovieTimeInfo from './cardComponents/MovieTimeInfo'

import { RootObject } from '../interfaces/Movies'
import PageIndicator from './PageIndicator'
import MovieLabel from './cardComponents/MovieLabel'
import { fetchMovies } from '../utils/fetchMovies'
import { Movie } from '../classes/Movie'

export default () => {
  const [labelType, setLabelType] = useState<string>('')
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
  const [movies, setMovies] = useState<Movie[]|undefined>()

  const sortedMovies = movies?.sort((x, y) => +new Date(x.showtime) - +new Date(y.showtime));
  console.log('-----------------------------')
  console.log(sortedMovies)
  const getMovies = async () => {
    setMovies(await fetchMovies('KBRG'))
  }
// console.log(movies)
  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setDarkMode(e.matches))
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {})
    }
  }, [])

  const fetchData = () => {
    const current = new Date()
    const currentDate = `${current.getFullYear()}-${
      current.getMonth() + 1
    }-${current.getDate()}`

    const currentLocation = 'KBRG'

    fetch(
      `https://kinepolisweb-programmation-int.kinepolis.com/api//Programmation/BE/NL/${currentDate}/${currentLocation}/WWW`,
    )
      .then((movieItem) => movieItem.json())
      .then((movieItem) => {
        setMovie(movieItem)
        // console.log(movieItem)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="flex gap-4 flex-wrap  mx-6 mt-4">
        {sortedMovies?.map((movie) => (
            <div key={movie.id} className="bg-white dark:shadow-none shadow-md shadow-gray-xx-light border-[3px] border-warning dark:bg-alpha-x w-[383px] h-[196px] rounded-2xl overflow-hidden">
              <div className="flex h-[62%]">
                <div className="w-[35%]">
                  <MovieCover />
                </div>
                <div className="w-2/4 mt-4">
                  <MovieTimeInfo
                    movieTime={movie.showtime}
                    movieHall={movie.hall}
                    cosy={movie.hasCosySeating}
                    special={movie.hasSpecialSeating}
                  />
                </div>
                <div className=" justify-end" >
                  
                  <MovieLabel text="POPULAR" type={labelType} />

                  <div className="flex flex-wrap justify-end mr-4 mt-2">
                    <QRCodeSVG
                      bgColor="transparent"
                      fgColor={darkMode ? 'white' : '#004680'}
                      size={70}
                      value="https://www.kinepolis.com"
                    />
                    <MovieSeats availableSeats={movie.availableSeats} maxSeats={movie.maxSeats}/>
                  </div>
                </div>
              </div>
              <div className="flex ml-4 items-end justify-between mr-4">
                <MovieInfo title={`${movie.movie.title.length > 25 ? `${movie.movie.title.substring(0, 20)}...` : movie.movie.title}`} genre={movie.movie.genres} version={movie.movie.spokenLanguage.name} />
                <MovieTechnology />
              </div>
            </div>
          ))}
      </div>
      <div className="flex gap-4 justify-center my-3">
        <PageIndicator page={3} />
      </div>
    </>
  )
}
