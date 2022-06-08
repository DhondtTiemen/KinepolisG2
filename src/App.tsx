import Clock from './components/Clock'
import ToolTip from './components/ToolTip'
import Trailer from './components/Trailer'
import TrailerCard from './components/TrailerCard'
import { useState } from 'react'
import { Movie } from './classes/Movie'
import MovieList from './components/MovieList'
import Logo from './components/Logo'
import { useLocation } from 'react-router-dom'

export default function App() {
  const search = useLocation().search
  let location = new URLSearchParams(search).get('location')?.toString()
  /* @ts-ignore */
  let timing = parseInt(new URLSearchParams(search).get('timing'))

  const [movies, setMovies] = useState<Movie[]>()

  return (
    <div
      className="flex flex-col justify-between h-screen  dark:bg-alpha bg-gray-x-light "
      style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      {/* <div className="flex flex-col justify-between h-screen dark:bg-black dark:bg-opacity-70  backdrop-blur-xl"> */}
      <div className="h-2/3">
        <div className="flex justify-between items-center mx-6 pt-4">
          <Logo />
          <Clock />
          <ToolTip text={'Scan de QR-code, en koop tickets'} />
        </div>
        <MovieList
          moviesPerPage={8}
          location={location ? location : 'KLUIK'}
          timing={timing ? timing : 10}
        />
      </div>

      <Trailer
        video={
          'https://www.youtube.com/embed/YOtkCKM41Wc?controls=0&autoplay=1'
        }
      >
        <TrailerCard
          link="https://www.kinepolis.be"
          text="Koop hier je tickets voor"
          subText="Clifford De Grote Rode Hond"
        />
        <TrailerCard
          link="https://www.kinepolis.be"
          text="Film niet gevonden?"
          subText="Scan hier voor andere films"
          secondary
        />
      </Trailer>
    </div>
  )
}
