import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import MovieTechnology from './MovieTechnology'
import { SessionAttribute } from '../../interfaces/Movies'

export default function MovieInfo({
  title,
  genre,
  version,
  sessionAttributes,
}: {
  title: string
  genre: []
  version: string
  sessionAttributes: SessionAttribute[]
}) {
  const [play, setPlay] = useState<boolean>(false)
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
          className="text-2xl  text-alpha-x-light  dark:text-white font-bold"
          gradient={false}
          onCycleComplete={async () => {
            setPlay(false)
            await delay(1000)
            setPlay(true)
          }}
          play={play}
          speed={40}
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
    setPlay(true)
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
        <MovieTechnology sessionAttributes={sessionAttributes} />
      </div>
    </div>
  )
}
