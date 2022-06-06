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
        let today = new Date()
        let currentTime = today.getHours() + ':' + today.getMinutes()
        console.log('Currenttime: ' + currentTime)

        let checkTime = today.getHours() + 6 + ':' + today.getMinutes()
        console.log('Checktime: ' + checkTime)

        const movieTime = session.showtime.toString().substring(11, 16)
        console.log('Movietime: ' + movieTime)

        // //Function for time
        // if (currentTime >= movieTime) {
        //   console.log('Gedaan')
        // }
        // else {
        //   console.log('Moet nog beginnen')
        //   if (checkTime >= movieTime) {
        //     console.log('Start binnenkort')
        //   }
        //   else {
        //     console.log('Is vanavond pas...')
        //   }
        // }

        if (currentTime <= movieTime) {
          console.log('Moet nog beginnen')
          if (checkTime >= movieTime) {
            // Session in MovieObject plaatsen
            const movieObject = new Movie(session)
    
            // Film koppelen aan MovieObject
            movieObject.movie = movieData.films.find(
              (item: IMovie) => item.id == session.film.id,
            )
    
            // Berekenen of lastTickets == true
            if ((movieObject.maxSeats / 100) * 15 > movieObject.availableSeats) {
              movieObject.lastTickets = true
            }
    
            // MovieObject toevoegen aan movies array
            movies.push(movieObject)
          }
        }
      })
    })
    .then(() => movies) // Return movies array
}
