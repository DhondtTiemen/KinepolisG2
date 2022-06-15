import { useEffect, useState } from 'react'
import PageIndicator from './PageIndicator'
import { fetchMovies } from '../utils/fetchMovies'
import { Movie } from '../classes/Movie'
import MovieCard from './cardComponents/MovieCard'

export default function MovieList({
  moviesPerPage,
  location,
  timing,
  minutesBeforeNow,
  minutesAfterNow,
}: {
  moviesPerPage: number
  location: string
  timing: number
  minutesBeforeNow: number
  minutesAfterNow: number
}) {
  const [movies, setMovies] = useState<Movie[]>()
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>()
  const [lists, setLists] = useState<JSX.Element[]>()
  const [opacity, setOpacity] = useState<string>('opacity-0')
  const [pages, setPages] = useState<number>(-1)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [slide, setSlide] = useState<React.CSSProperties>()

  const sortedMovies = async (list: Movie[] | undefined) => {
    /*@ts-ignore*/
    const sorted = list.sort(
      //@ts-ignore
      (x, y) => +new Date(x.showtime) - +new Date(y.showtime),
    )
    setMovies(sorted)
    const checkedList = await checkMovieTime(sorted)
    setFilteredMovies(checkedList)
    setPages(Math.ceil(checkedList.length / moviesPerPage))
    return sorted
  }

  const checkMovieTime = async (list: Movie[]) => {
    const moviesInTime: Movie[] = []
    const today = new Date()

    const timeAfter = new Date(today.getTime() + minutesAfterNow * 60000)
    const timeBefore = new Date(today.getTime() - minutesBeforeNow * 60000)

    list.map((movie) => {
      //@ts-ignore
      const showtime = new Date(movie.showtime)
      if (
        showtime.getTime() >= timeBefore.getTime() &&
        showtime.getTime() <= timeAfter.getTime()
      ) {
        moviesInTime.push(movie)
      }
    })

    return moviesInTime
  }

  const noMovies = async (tempPages: number) => {
    setTimeout(() => {
      if (tempPages == 0 && pages == 0) {
        const tempLists: JSX.Element[] = []
        tempLists.push(
          <div
            key={1234567890}
            className="flex flex-col w-screen items-center h-full mt-3 px-6 justify-center text-alpha-x-light dark:text-white text-3xl font-proxima font-medium text-center"
          >
            <span>Er worden momenteel geen films vertoont </span>
            <br />
            <span className="dark:text-warning text-error">
              Scan de QR-code onderaan om tickets te kopen
            </span>
          </div>,
        )
        setLists(tempLists)
      }
    }, 2000)
  }
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  const createLists = async () => {
    const tempLists: JSX.Element[] = []
    const tempPages = await pages
    if (tempPages < 1) {
      tempLists.push(
        <div
          key={9876543210}
          className="flex w-screen flex-col items-center h-full mt-3 px-6 justify-center text-black dark:text-white text-3xl font-proxima font-medium text-center"
        >
          <svg
            className="dark:fill-white fill-alpha-x-light animate-opacity w-[250px] h-[250px]"
            viewBox="280 280 350 350"
          >
            <path
              d="M462.5,301.3L357,633.8l-0.3,0.9l105.3-74.9l0.2-0.2l106.8,75.2L531.4,509l0.1-0.2l104-83l-0.9,0.1
	l-129.3,0L462.5,301.3z M467.6,389.9l-16.4-5.1l0.1-0.1l5.9-18.6l0.2,0.1l16,4.9l-5.6,18.8L467.6,389.9z M439,424.6l-0.1-0.2
	l5.4-18.4l16.8,5.5l-0.1,0.3l-5.6,17.5l-0.1,0.2L439,424.6z M425.9,464.3l0.1-0.2l5.9-18l16.2,5.4l-0.1,0.3l-5.5,17.7l-0.1,0.2
	L425.9,464.3z M413.3,504.6l-0.2-0.1l6.1-17.9l0.1-0.2l16.3,5.3l-0.1,0.3l-5.7,17.9L413.3,504.6z M400.7,544.9l-0.2-0.1l6-18.2
	l0.2,0.1l15.5,5.2l-5.1,17.6l-0.1,0.2L400.7,544.9z M404,589.8l-16.5-5.6l5.8-17.7l0.1-0.3l16.4,5.7l-0.1,0.6l-5.5,17.5L404,589.8z
	 M404.4,426L292.7,426l-0.8,0l92,74.7l0.1-0.3l23.6-74.5L404.4,426z"
            />
          </svg>
        </div>,
      )
      setLists(tempLists)
    }
    await delay(1000)

    noMovies(tempPages)
    for (let index = 0; index < pages + 1; index++) {
      let indexes = getIndexes(index)
      const element = (
        <div
          key={index}
          className=" gap-6 grid grid-cols-[repeat(2,383px)] justify-center w-screen h-full px-8"
        >
          {filteredMovies?.slice(indexes[0], indexes[1]).map((movie) => {
            return (
              /*@ts-ignore*/
              <MovieCard location={location} movie={movie} key={movie.id} />
            )
          })}
        </div>
      )
      tempLists.push(element)
    }
    setLists(tempLists)

    await delay(100)
    setOpacity('opacity-1')
  }

  const getMovies = async () => sortedMovies(await fetchMovies(location))
  const refreshMovies = async () => sortedMovies(movies)

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
    if (!filteredMovies) {
      getMovies()
    } else {
      setInterval(() => {
        getMovies()
      }, 600000)
    }
  }, [filteredMovies, movies])

  useEffect(() => {
    createLists()
  }, [pages])

  useEffect(() => {
    if (pages > 1) {
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
      <div className={`flex flex-row w-fit `} style={slide}>
        {lists}
      </div>
      <div
        className={`flex gap-4 justify-center my-3 ${opacity} mb-[20px] xl:my-10`}
      >
        <PageIndicator page={pages} timing={timing} />
      </div>
    </div>
  )
}
