import { useEffect, useState } from 'react'
import PageIndicator from './PageIndicator'
import { fetchMovies } from '../utils/fetchMovies'
import { Movie } from '../classes/Movie'
import MovieCard from './cardComponents/MovieCard'

// TODO: films tonen X aantal uur voordat ze starten zijn (niet meer in fetchMovies)
// TODO: films tonen X aantal minuten nadat ze gestart zijn (voor de laatkomers)
// TODO: niet scrollen als er maar 1 pagina is
// TODO: Loading screen wanneer app start

export default function MovieList({
  moviesPerPage,
  location,
  timing,
  timeBefore,
  timeAfter,
}: {
  moviesPerPage: number
  location: string
  timing: number
  timeBefore: number
  timeAfter: number
}) {
  const [movies, setMovies] = useState<Movie[]>()
  const [lists, setLists] = useState<JSX.Element[]>()
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [slide, setSlide] = useState<React.CSSProperties>()

  const sortedMovies = async (list: Movie[]) => {
    const sorted = list.sort(
      //@ts-ignore
      (x, y) => +new Date(x.showtime) - +new Date(y.showtime),
    )
    setMovies(sorted)
    setPages(Math.ceil(list.length / moviesPerPage))
    //Test om te zien of er iets verschijnt als er geen films zijn.
    //setPages(0)
    return sorted
  }

  const createLists = async () => {
    const tempLists: JSX.Element[] = []
    if (pages == 0) {
      tempLists.push(
        <div
          key={0}
          className="flex w-screen flex-col items-center h-full mt-3 px-6 justify-center text-black dark:text-white text-3xl font-proxima font-medium text-center"
        >
          <span>Er worden momenteel geen films vertoont </span>
          <br />
          <span className="text-warning">
            Scan de QR-code onderaan om tickets te kopen
          </span>
        </div>,
      )
    } else {
      for (let index = 0; index < pages + 1; index++) {
        let indexes = getIndexes(index)
        const element = (
          <div
            key={index}
            className="flex gap-4 flex-wrap w-screen content-start mt-3 px-6"
          >
            {movies?.slice(indexes[0], indexes[1]).map((movie) => {
              /*@ts-ignore*/
              return <MovieCard movie={movie} key={movie.id} />
            })}
          </div>
        )
        tempLists.push(element)
      }
    }
    setLists(tempLists)
  }

  const getMovies = async () => sortedMovies(await fetchMovies(location))

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
    if (pages > 0) {
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
      }, timing * 1000 + 1000)
    }
  }, [currentPage, pages])

  return (
    <div className="flex flex-col justify-between h-[93%] overflow-x-hidden">
      <div className={`flex flex-row w-fit h-full`} style={slide}>
        {lists}
      </div>
      <div className="flex gap-4 justify-center my-3 mb-[20px]">
        <PageIndicator page={pages} timing={timing} />
      </div>
    </div>
  )
}
