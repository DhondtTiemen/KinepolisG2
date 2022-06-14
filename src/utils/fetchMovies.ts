import { Movie } from '../classes/Movie'
import { ISession, IMovie } from '../interfaces/Movies'

export const fetchMovies = async (location: string) => {
  const current = new Date()
  const currentDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`

  const movies = [] as Movie[]

  return await fetch(
    `https://kinepolisweb-programmation.kinepolis.com/api//Programmation/BE/NL/${currentDate}/${location}/WWW`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  )
    .then((movieData) => movieData.json())
    .then((movieData) => {
      movieData.sessions.map((session: ISession) => {
        const movieObject = new Movie(session)

        //@ts-ignore
        movieObject.movie = movieData.films.find(
          (item: IMovie) => item.id == session.film.id,
        )

        if (
          //@ts-ignore
          (movieObject.maxSeats / 100) * 15 >
          //@ts-ignore
          movieObject.availableSeats
        ) {
          //@ts-ignore
          movieObject.lastTickets = true
        }

        movies.push(movieObject)
      })
    })
    .then(() => movies)
}
