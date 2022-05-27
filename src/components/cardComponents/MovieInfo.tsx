import { useEffect, useState } from 'react'
import { Movie } from '../../classes/Movie'
import { fetchMovies } from '../../utils/fetchMovies'

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
  const ArrayToString = (genres: []) => {
    let array: [] = []
    for (let i in genres) {
      array.push(genres[i].name)
    }
    return array
  }
  const getMovies = async () => {
    setMovies(await fetchMovies('KBRG'))
  }
  // console.log(movies)
  useEffect(() => {
    if (!movies) {
      getMovies()
    }
  }, [movies])
  return (
    <div className="font-proxima">
      <h1 className="text-2xl text-alpha-x-light  dark:text-white font-bold">
        {title}
      </h1>
      <p className="text-xs text-alpha-xxx-light dark:text-gray font-medium">
        {version}
      </p>
      <p className="text-[8px] text-error dark:text-warning mt-1 ">
        {ArrayToString(genre).toString().replace(',', ' | ')}
      </p>
    </div>
  )
}
