import { useEffect, useState } from 'react'
import PageIndicator from './PageIndicator'
import { fetchMovies } from '../utils/fetchMovies'
import { Movie } from '../classes/Movie'
import MovieCard from './cardComponents/MovieCard'

// TODO: films tonen X aantal uur voordat ze starten zijn (niet meer in fetchMovies)
// TODO: films tonen X aantal minuten nadat ze gestart zijn (voor de laatkomers)
// TODO: Loading screen wanneer app start
// TODO: Iedere X aantal minuten films opnieuw sorteren op tijd & x aantal uur ervoor en x aantal minuten erna

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
  const [lists, setLists] = useState<JSX.Element[]>()
  const [pages, setPages] = useState<number>(-1)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [slide, setSlide] = useState<React.CSSProperties>()

  const sortedMovies = async (list: Movie[]) => {
    const sorted = list.sort(
      //@ts-ignore
      (x, y) => +new Date(x.showtime) - +new Date(y.showtime),
    )
    // setMovies(sorted)
    const checkedList = await checkMovieTime(sorted)
    // console.log(checkedList.length)
    setPages(Math.ceil(checkedList.length / moviesPerPage))
    //Test om te zien of er iets verschijnt als er geen films zijn.
    //setPages(0)
    return sorted
  }

  const checkMovieTime = async (list: Movie[]) => {
    const moviesInTime = []
    const today = new Date()
    const checkTime =
      today.getHours() + minutesAfterNow / 60 + ':' + today.getMinutes()
    const currentDate = new Date()
    const futureDate = new Date(
      currentDate.getTime() - minutesBeforeNow * 60000,
    )
    const toLateTime = futureDate.getHours() + ':' + futureDate.getMinutes()

    for (let i = 0; i < list.length; i++) {
      //@ts-ignore
      const date = new Date(list[i].showtime)
      const time = date.toLocaleTimeString('nl-BE', {
        hour: '2-digit',
        minute: '2-digit',
      })

      if (toLateTime <= time && checkTime >= time) {
        moviesInTime.push(list[i])
      }
    }

    setMovies(moviesInTime)
    return moviesInTime
  }

  const noMovies = async (tempPages: number) => {
    setTimeout(() => {
      if (tempPages == 0 && pages == 0) {
        const tempLists: JSX.Element[] = []
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
        setLists(tempLists)
      }
    }, 2000)
  }

  const createLists = async () => {
    const tempLists: JSX.Element[] = []
    const tempPages = await pages
    if (tempPages < 1) {
      tempLists.push(
        <div
          key={0}
          className="flex w-screen flex-col items-center h-full mt-3 px-6 justify-center text-black dark:text-white text-3xl font-proxima font-medium text-center"
        >
          <span className="text-error">
            LOADING <span className="text-good">LOADING</span> LOADING
          </span>
        </div>,
      )
      setLists(tempLists)
    }
    noMovies(tempPages)
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
      <div className={`flex flex-row w-fit h-full`} style={slide}>
        {lists}
      </div>
      <div className="flex gap-4 justify-center my-3 mb-[20px]">
        <PageIndicator page={pages} timing={timing} />
      </div>
    </div>
  )
}
