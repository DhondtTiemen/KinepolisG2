import Clock from './components/Clock'
import MovieCard from './components/MovieCard'
import PageIndicator from './components/PageIndicator'
import ToolTip from './components/ToolTip'
import Trailer from './components/Trailer'
import TrailerCard from './components/TrailerCard'
import { useEffect, useState } from 'react'
import { fetchMovies } from './utils/fetchMovies'
import { Movie } from './classes/Movie'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>()

  const getMovies = async () => {
    setMovies(await fetchMovies('KBRG'))
  }

  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])

  return (
    <div className="h-screen bg-gray-x-light dark:bg-alpha">
      <div className="flex justify-between items-center mx-6 pt-6">
        <Clock />
        <ToolTip text={'Scan hier en koop je tickets'} />
      </div>

      {/* LIST MET MOVIES */}
      <ul className="text-white">
        {movies?.map((movie) => (
          <li key={movie.id}>
            {movie.movie.title}
            <ul>
              <li>Vrije stoelen: {movie.availableSeats}</li>
            </ul>
          </li>
        ))}
      </ul>
      {/* LIST MET MOVIES */}

      <MovieCard />
      {/*<div className="flex gap-4 justify-center my-3">
      <PageIndicator page={3} time />
      {/*</div>*/}
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
