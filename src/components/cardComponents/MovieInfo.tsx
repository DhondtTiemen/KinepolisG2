import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import MovieTechnology from './MovieTechnology'
import { Format, SessionAttribute } from '../../interfaces/Movies' 

export default function MovieInfo({
  title,
  genre,
  version,
  format,
  sessionAttributes,
}: {
  title: string
  genre: []
  version: string,
  format: Format,
  sessionAttributes: SessionAttribute[]
}) {
  const [speed, setSpeed] = useState<number>(0)
  const ArrayToString = (genres: []) => {
    let array: [] = []
    for (let i in genres) {
      //@ts-ignore
      array.push(genres[i].name)
    }
    return array
  }
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const checkTitleCharacters = () => {
    if (title.length > 30) {
      return (
        <Marquee
          className="text-2xl overflow-hidden text-alpha-x-light  dark:text-white font-bold"
          gradient={false}
          onCycleComplete={async () => {
            setSpeed(0)
            await delay(1000)
            setSpeed(40)
          }}
          speed={speed}
        >
          {/* TODO: Titel de volledige breedte van het kaartje laten innemen?  */}
          <p className="pr-[50px]">{title}</p>
        </Marquee>
      )
    } else {
      return (
        <h1 className="text-2xl text-alpha-x-light truncate dark:text-white font-bold">
          {title}
        </h1>
      )
    }
  }
  const start = async () => {
    await delay(1500)
    setSpeed(40)
  }
  useEffect(() => {
    start()
  })

  return (
    <div className="font-proxima mx-4 ">
      {checkTitleCharacters()}
      <p className="text-[14px] text-alpha-xxx-light -mt-[2px] dark:text-gray font-medium">
        {version}
      </p>
      <div className="flex items-end justify-between w-full -mt-2">
        <p className="text-[11px] text-error dark:text-warning  ">
          {ArrayToString(genre).toString().replace(',', ' | ')}
        </p>
        <MovieTechnology format={format} sessionAttributes={sessionAttributes} />
      </div>
    </div>
  )
}
