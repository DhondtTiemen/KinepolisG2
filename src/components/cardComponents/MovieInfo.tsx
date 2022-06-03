import { useEffect, useState } from 'react'
import { Movie } from '../../classes/Movie'
import { fetchMovies } from '../../utils/fetchMovies'
import Marquee from "react-fast-marquee";

export default function MovieInfo({
  title,
  genre,
  version,
}: {
  title: string
  genre: []
  version: string
}) {
  const [movies, setMovies] = useState<Movie[]>()
  const [play, setPlay] = useState<boolean>(true)
  const ArrayToString = (genres: []) => {
    let array: [] = []
    for (let i in genres) {
      array.push(genres[i].name)
    }
    return array
  }
  function delay(ms: number) {
    console.log('dealy')
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  const getMovies = async () => {
    setMovies(await fetchMovies('KBRG'))
  }
  const checkPlay=async()=>{
    setPlay(false)
    await delay(1000)
    setPlay(true)
  }
  
  const checkTitleCharacters=()=>{
    if (title.length > 25){
      return (
        <Marquee 
          className="text-2xl w-[270px] text-alpha-x-light  dark:text-white font-bold"
          gradient={false}
          onCycleComplete={()=>checkPlay()}
          play={play}
          speed={40}
          >
            <p className='pr-[50px]'>
              {title}

            </p>
          </Marquee>

        )
    }
    else{
      return (<h1 
        className="text-2xl text-alpha-x-light truncate dark:text-white font-bold"
        >
          {title}
        </h1>)
    }
  }
  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])
  return (
    <div className="font-proxima">
      {checkTitleCharacters()}
      <p className="text-[14px] text-alpha-xxx-light -mt-[2px] dark:text-gray font-medium">
        {version}
      </p>
      <p className="text-[11px] text-error dark:text-warning  ">
        {ArrayToString(genre).toString().replace(',', ' | ')}
      </p>
    </div>
  )
}
