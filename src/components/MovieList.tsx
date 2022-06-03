import { useEffect, useState } from 'react'
import PageIndicator from './PageIndicator'
import { fetchMovies } from '../utils/fetchMovies'
import { Movie } from '../classes/Movie'
import MovieCard from './cardComponents/MovieCard'

export default function MovieList({
  moviesPerPage,
  location,
  timing,
}: {
  moviesPerPage: number
  location: string
  timing: number
}) {
  const [movies, setMovies] = useState<Movie[]>()
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const sortedMovies = async (list: Movie[]) => {
    setMovies(
      list.sort((x, y) => +new Date(x.showtime) - +new Date(y.showtime)),
    )
    setPages(Math.ceil(list.length / moviesPerPage))
    console.log(list)
  }

  const getMovies = async () => {
    sortedMovies(await fetchMovies(location))
  }

  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])

  useEffect(() => {
    setTimeout(() => {
      if (currentPage == pages - 1) {
          setCurrentPage(0)
      } else {
        setCurrentPage(currentPage + 1)
      }
    }, timing * 1000+1000)
  }, [currentPage])

  return (
    <div className="flex flex-col justify-between h-[93%]">
      <div className="flex gap-4 flex-wrap  mx-6 mt-4">
        {movies
          ?.slice(
            currentPage == 0 ? 0 : moviesPerPage * currentPage,
            currentPage == 0
              ? moviesPerPage
              : moviesPerPage * currentPage + moviesPerPage,
          )
          .map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />
          })}
      </div>
      <div className="flex gap-4 justify-center my-3 mb-[20px]">
        <PageIndicator page={pages} timing={timing} />
      </div>
    </div>
  )
}
