import MovieCard from './components/MovieCard'
import PageIndicator from './components/PageIndicator'
import ToolTip from './components/ToolTip'
import Trailer from './components/Trailer'
import TrailerCard from './components/TrailerCard'

function App() {
  return (
    <div className="h-screen bg-gray-x-light dark:bg-alpha">
      <div>
        <ToolTip />
      </div>
      <div className="flex gap-4 flex-wrap justify-center mx-6 mt-4">
        <MovieCard />
        <MovieCard />
      </div>
      <div className="flex gap-4 justify-center my-3">
        <PageIndicator page={1} />
        <PageIndicator page={2} />
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

export default App
