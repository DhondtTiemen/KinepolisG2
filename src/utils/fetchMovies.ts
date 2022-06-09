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
  )
    .then((movieData) => movieData.json())
    .then((movieData) => {
      movieData.sessions.map((session: ISession) => {
        //Get Time
        // let today = new Date()
        // let currentTime = today.getHours() + ':' + today.getMinutes()
        // let checkTime = today.getHours() + 6 + ':' + today.getMinutes()
        // const movieTime = session.showtime.toString().substring(11, 16)

        // if (currentTime <= movieTime) {
          // console.log('Moet nog beginnen')
          // if (checkTime >= movieTime) {
            // Session in MovieObject plaatsen
            const movieObject = new Movie(session)

            // Film koppelen aan MovieObject
            //@ts-ignore
            movieObject.movie = movieData.films.find(
              (item: IMovie) => item.id == session.film.id,
            )

            // Berekenen of lastTickets == true
            if (
              //@ts-ignore
              (movieObject.maxSeats / 100) * 15 >
              //@ts-ignore
              movieObject.availableSeats
            ) {
              //@ts-ignore
              movieObject.lastTickets = true
            }

            // MovieObject toevoegen aan movies array
            movies.push(movieObject)
          // }
        // }
      })
    })
    .then(() => movies) // Return movies array
}
