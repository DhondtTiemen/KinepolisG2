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
  const [lists, setLists] = useState<JSX.Element[]>()
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [slide, setSlide] = useState()

  const sortedMovies = async (list: Movie[]) => {
    const sorted = list.sort(
      (x, y) => +new Date(x.showtime) - +new Date(y.showtime),
    )
    setMovies(sorted)

    setPages(Math.ceil(list.length / moviesPerPage))
    return sorted
    //console.log(list)
  }

  const createLists = async () => {
    const tempLists: JSX.Element[] = []
    for (let index = 0; index < pages + 1; index++) {
      console.log(index)
      let indexes = getIndexes(index)
      if (index == 5) {
        indexes = [0, moviesPerPage]
      }
      const element = (
        <div
          key={index}
          className="flex gap-4 flex-wrap w-screen content-start px-6"
        >
          {movies?.slice(indexes[0], indexes[1]).map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />
          })}
        </div>
      )
      tempLists.push(element)
    }
    setLists(tempLists)
  }

  const getMovies = async () => {
    sortedMovies(await fetchMovies(location))
  }

  const getIndexes = (list: number) => {
    let beginList: number = 0
    let endList: number = 0
    if (list == 0) {
      beginList = 0
      endList = moviesPerPage
    } else {
      beginList = pages - list == 0 ? 0 : moviesPerPage * list
      endList = pages - list == 0 ? moviesPerPage : (list + 1) * moviesPerPage
    }
    console.log([beginList, endList])
    return [beginList, endList]
  }

  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])

  useEffect(() => {
    createLists()
  }, [pages])

  useEffect(() => {
    setTimeout(() => {
      if (currentPage == pages - 1) {
        setCurrentPage(0)
        setSlide({
          transition: '1s ease all',
          marginLeft: `-${currentPage + 1}00%`,
        })
        setTimeout(() => {
          if (currentPage == pages - 1) {
            setSlide({ transition: '0s', marginLeft: `0%` })
          }
        }, 2000)
      } else {
        setSlide({
          transition: '1s ease all',
          marginLeft: `-${currentPage + 1}00%`,
        })
        setCurrentPage(currentPage + 1)
      }
    }, timing * 1000)
  }, [currentPage])

  return (
    <div className="flex flex-col justify-between h-[93%]">
      <div className={`test flex flex-row w-fit`} style={slide}>
        {lists}
      </div>
      <div className="flex gap-4 justify-center my-3 mb-[20px]">
        <PageIndicator page={pages} timing={timing} />
      </div>
    </div>
  )
}
