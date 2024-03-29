import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import MovieCover from './MovieCover'
import MovieInfo from './MovieInfo'
import MovieSeats from './MovieSeats'
import MovieTimeInfo from './MovieTimeInfo'
import MovieLabel from './MovieLabel'
import { Movie } from '../../classes/Movie'

export default function MovieCard({
  movie,
  location,
  lightMode,
}: {
  movie: Movie
  location: string
  lightMode: boolean
}) {
  const [label, setLabel] = useState<boolean>(false)
  const [labelType, setLabelType] = useState<string>('')

  const setLabels = async () => {
    if (
      //@ts-ignore
      movie.popular == true ||
      //@ts-ignore
      (movie.lastTickets == true && movie.availableSeats != 0)
    ) {
      //@ts-ignore
      if (movie.popular == true) {
        setLabel(true)
        setLabelType('popular')
      } else {
        setLabel(true)
        setLabelType('last tickets')
      }
    } else {
      setLabel(false)
      setLabelType('')
    }
  }
  useEffect(() => {
    setLabels()
  }, [labelType])

  return (
    <div
      className={`${
        label == false
          ? 'border-none'
          : // @ts-ignore
          movie.availableSeats == 0
          ? 'border-none'
          : labelType == 'popular'
          ? 'dark:border-alpha-xx-light border-alpha-x-light border-[3px]'
          : 'dark:border-warning border-error border-[3px]'
      }   bg-white dark:shadow-none shadow-md shadow-gray-xx-light dark:bg-alpha-x w-[383px] h-[196px] rounded-2xl overflow-hidden`}
    >
      <div className="flex h-[61%]">
        <div className="w-[35%]">
          {/*@ts-ignore*/}
          <MovieCover images={movie.movie.images} />
        </div>
        <div className="w-2/4 mt-3">
          <MovieTimeInfo
            //@ts-ignore
            movieTime={movie.showtime}
            //@ts-ignore
            movieHall={movie.hall}
            //@ts-ignore
            cosy={movie.hasCosySeating}
            //@ts-ignore
            special={movie.hasSpecialSeating}
          />
        </div>
        <div className=" justify-end">
          <MovieLabel text={labelType} visible={label} type={labelType} />

          <div className="flex flex-wrap justify-end mr-4 mt-4">
            <QRCodeSVG
              bgColor="transparent"
              fgColor={!lightMode ? '#FFFFFF' : '#004680'}
              size={65}
              //@ts-ignore
              value={`https://kinepolis.be/nl/goto-checkout-gate/${movie.vistaSessionId}/${location}`}
            />
            <MovieSeats
              //@ts-ignore
              lastTickets={movie.lastTickets}
              //@ts-ignore
              availableSeats={movie.availableSeats}
            />
          </div>
        </div>
      </div>
      <MovieInfo
        //@ts-ignore
        title={movie.movie.title}
        //@ts-ignore
        genre={movie.movie.genres}
        //@ts-ignore
        version={movie.movie.spokenLanguage.name}
        //@ts-ignore
        format={movie.film.format}
        //@ts-ignore
        sessionAttributes={movie.sessionAttributes}
      />
    </div>
  )
}
