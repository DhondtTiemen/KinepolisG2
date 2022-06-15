import Clock from './components/Clock'
import ToolTip from './components/ToolTip'
import Trailer from './components/Trailer'
import TrailerCard from './components/TrailerCard'
import MovieList from './components/MovieList'
import Logo from './components/Logo'
import { useLocation } from 'react-router-dom'

export default function App() {
  const search = useLocation().search
  let location = new URLSearchParams(search).get('location')?.toString()
  let lightMode = new URLSearchParams(search).get('lightmode')
  /* @ts-ignore */
  let timing = parseInt(new URLSearchParams(search).get('timing'))
  let minutesBeforeNow = parseInt(
    /* @ts-ignore */
    new URLSearchParams(search).get('minutesbeforenow'),
  )
  let minutesAfterNow = parseInt(
    /* @ts-ignore */
    new URLSearchParams(search).get('minutesafternow'),
  )

  return (
    <div className="dark">
      <div
        className="flex flex-col justify-between h-screen  dark:bg-alpha bg-gray-x-light overflow-hidden "
        style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <div className="h-2/3">
          <div className="grid grid-cols-3 items-center  mx-32 pt-14">
            <Logo />
            <Clock />
            <ToolTip text={'Scan de QR-code, en koop tickets'} />
          </div>
          <div className="flex justify-center mt-[2%] content-start  xl:mt-[34%] xl:scale-[240%]">
            <MovieList
              moviesPerPage={8}
              location={location ? location.toUpperCase() : 'KBRG'}
              timing={timing ? timing : 10}
              minutesBeforeNow={minutesBeforeNow ? minutesBeforeNow : 30}
              minutesAfterNow={minutesAfterNow ? minutesAfterNow : 240}
              lightMode={lightMode ? true : false}
            />
          </div>
        </div>

        <Trailer
          video={
            'https://www.youtube.com/embed/qSqVVswa420?autoplay=1&mute=1&loop=1&playlist=qSqVVswa420&controls=0'
          }
        >
          <TrailerCard
            link="https://www.kinepolis.be"
            text="Koop hier je tickets voor"
            subText="Top Gun: Maverick"
            lightMode={lightMode ? true : false}
          />

          <TrailerCard
            link="https://www.kinepolis.be"
            text="Film niet gevonden?"
            subText="Scan hier voor andere films"
            secondary
            lightMode={lightMode ? true : false}
          />
        </Trailer>
      </div>
    </div>
  )
}
