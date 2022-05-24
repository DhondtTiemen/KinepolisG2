import { QRCodeSVG } from 'qrcode.react'
import MovieCard from './components/MovieCard'
import PageIndicator from './components/PageIndicator'
import ToolTip from './components/ToolTip'

function App() {
  return (
    <div>
      <h1 className="text-lg text-alpha font-proxima">
        Kinepolis
      </h1>
      <QRCodeSVG value="https://www.kinepolis.com" />
      <div className="flex justify-between mx-6 mt-4">
        <MovieCard />
        <MovieCard />
      </div>
      <div className='flex gap-4 justify-center'>
        <PageIndicator page={1}/>
        <PageIndicator page={2}/>
      </div>
      <div>
        <ToolTip/>
      </div>
    </div>
  )
}

export default App
