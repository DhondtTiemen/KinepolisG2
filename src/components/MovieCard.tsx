import { QRCodeSVG } from 'qrcode.react'
import MovieCover from './MovieCover'
import MovieInfo from './MovieInfo'
import MovieSeats from './MovieSeats'
import MovieTechnology from './MovieTechnology'
import MovieTimeInfo from './MovieTimeInfo'

export default () => {
  return (
    <div className="bg-alpha-x w-96 h-48 rounded-2xl overflow-hidden">
      <div className="flex h-[62%]">
        <div className="w-[35%]">
          <MovieCover />
        </div>
        <div className="w-2/4 mt-4">
          <MovieTimeInfo />
        </div>
        <div className="flex flex-wrap justify-end mt-4 mr-4 ">
          <QRCodeSVG
            bgColor="transparent"
            fgColor="white"
            size={70}
            value="https://www.kinepolis.com"
          />
          <MovieSeats />
        </div>
      </div>
      <div className="flex ml-4 items-end justify-between mr-4">
        <MovieInfo />
        <MovieTechnology />
      </div>
    </div>
  )
}
