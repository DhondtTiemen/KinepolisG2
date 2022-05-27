import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import MovieCover from './MovieCover'
import MovieInfo from './MovieInfo'
import MovieSeats from './MovieSeats'
import MovieTechnology from './MovieTechnology'
import MovieTimeInfo from './MovieTimeInfo'
import PageIndicator from '../PageIndicator'
import MovieLabel from './MovieLabel'
import { Movie } from '../../classes/Movie'

export default function MovieCard({ movie }: { movie: Movie }) {
  const [labelType, setLabelType] = useState<string>('')
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
  return (
    <div className="bg-white dark:shadow-none shadow-md shadow-gray-xx-light border-[3px] border-warning dark:bg-alpha-x w-[383px] h-[196px] rounded-2xl overflow-hidden">
      <div className="flex h-[62%]">
        <div className="w-[35%]">
          <MovieCover images={movie.movie.images} />
        </div>
        <div className="w-2/4 mt-4">
          <MovieTimeInfo
            movieTime={movie.showtime}
            movieHall={movie.hall}
            cosy={movie.hasCosySeating}
            special={movie.hasSpecialSeating}
          />
        </div>
        <div className=" justify-end">
          <MovieLabel text="POPULAR" type={labelType} />

          <div className="flex flex-wrap justify-end mr-4 mt-2">
            <QRCodeSVG
              bgColor="transparent"
              fgColor={darkMode ? 'white' : '#004680'}
              size={70}
              value="https://www.kinepolis.com"
            />
            <MovieSeats
              lastTickets={movie.lastTickets}
              availableSeats={movie.availableSeats}
            />
          </div>
        </div>
      </div>
      <div className="flex ml-4 items-end justify-between mr-4">
        <MovieInfo
          title={`${
            movie.movie.title.length > 25
              ? `${movie.movie.title.substring(0, 20)}...`
              : movie.movie.title
          }`}
          genre={movie.movie.genres}
          version={movie.movie.spokenLanguage.name}
        />
        <MovieTechnology sessionAttributes={movie.sessionAttributes} />
      </div>
    </div>
  )
}
