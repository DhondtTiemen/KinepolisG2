import { Movie } from '../classes/Movie'
import { ISession, IMovie } from '../interfaces/Movies'

export const fetchMovies = async (location: string) => {
  const current = new Date()
  const currentDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`

  const movies = [] as Movie[]

  return await fetch(
    `https://kinepolisweb-programmation-int.kinepolis.com/api//Programmation/BE/NL/${currentDate}/${location}/WWW`,
  )
    .then((movieData) => movieData.json())
    .then((movieData) => {
      movieData.sessions.map((session: ISession) => {
        const movieObject = new Movie(session)
        movieObject.movie = movieData.films.find(
          (item: IMovie) => item.id == session.film.id,
        )
        //console.log(session)
        movies.push(movieObject)
      })
    })
    .then(() => movies)
}
