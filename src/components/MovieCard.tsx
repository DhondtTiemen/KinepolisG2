import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import MovieCover from './cardComponents/MovieCover'
import MovieInfo from './cardComponents/MovieInfo'
import MovieSeats from './cardComponents/MovieSeats'
import MovieTechnology from './cardComponents/MovieTechnology'
import MovieTimeInfo from './cardComponents/MovieTimeInfo'

import { RootObject } from '../interfaces/Movies'
import PageIndicator from './PageIndicator'

export default () => {
  const [movie, setMovie] = useState<RootObject[]>()
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

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
        {movie &&
          movie.sessions.map((movieSession: RootObject) => (
            <div className="bg-white dark:shadow-none shadow-md shadow-gray-xx-light dark:bg-alpha-x w-[383px] h-[196px] rounded-2xl overflow-hidden">
              <div className="flex h-[62%]">
                <div className="w-[35%]">
                  <MovieCover />
                </div>
                <div className="w-2/4 mt-4">
                  <MovieTimeInfo
                    movieTime={movieSession.showtime}
                    movieHall={movieSession.hall}
                    cosy={movieSession.hasCosySeating}
                    special={movieSession.hasSpecialSeating}
                  />
                </div>
                <div className="flex flex-wrap justify-end mt-4 mr-4 ">
                  <QRCodeSVG
                    bgColor="transparent"
                    fgColor={darkMode ? 'white' : '#004680'}
                    size={70}
                    value="https://www.kinepolis.com"
                  />
                  <MovieSeats />
                </div>
              </div>
              <div className="flex ml-4 items-end justify-between mr-4">
                <MovieInfo />
                <MovieTechnology />
              </div>
            </div>
          ))}
      </div>
      <div className="flex gap-4 justify-center my-3">
        <PageIndicator page={1} />
        <PageIndicator page={2} />
      </div>
    </>
  )
}
