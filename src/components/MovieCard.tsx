import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import MovieCover from './cardComponents/MovieCover'
import MovieInfo from './cardComponents/MovieInfo'
import MovieSeats from './cardComponents/MovieSeats'
import MovieTechnology from './cardComponents/MovieTechnology'
import MovieTimeInfo from './cardComponents/MovieTimeInfo'

import { RootObject } from '../interfaces/Movies'

export default () => {
  const [movie, setMovie] =
    useState<RootObject[]>()

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
    movie &&
    movie.sessions.map(
      (movieSession: RootObject) => (
        <div className="bg-alpha-x w-[383px] h-[196px] rounded-2xl overflow-hidden">
          <div className="flex h-[62%]">
            <div className="w-[35%]">
              <MovieCover />
            </div>
            <div className="w-2/4 mt-4">
              <MovieTimeInfo
                movieTime={movieSession.showtime}
                movieHall={movieSession.hall}
                cosy={movieSession.hasCosySeating}
                special={
                  movieSession.hasSpecialSeating
                }
              />
            </div>
            <div className="flex flex-wrap justify-end mt-4 mr-4 ">
              <QRCodeSVG
                bgColor="transparent"
                fgColor="white"
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
      ),
    )
  )
}
