import { ISession } from '../interfaces/Movies'

export class Movie {
  constructor({
    complexOperator,
    documentType,
    country,
    language,
    showtime,
    businessDay,
    hall,
    vistaSessionId,
    hasSeatingPlan,
    hasSpecialSeating,
    hasCosySeating,
    isSoldOut,
    isSneakPreview,
    isPublicScreening,
    circuit,
    film,
    cinemaLabel,
    mainComplex,
    sessionAttributes,
    id,
    movie,
    maxSeats = Math.floor(Math.random() * (500 - 100) + 100),
    availableSeats = Math.floor(Math.random() * maxSeats),
    popular = false,
  }: ISession) {
    Object.assign(this, {
      complexOperator,
      documentType,
      country,
      language,
      showtime,
      businessDay,
      hall,
      vistaSessionId,
      hasSeatingPlan,
      hasSpecialSeating,
      hasCosySeating,
      isSoldOut,
      isSneakPreview,
      isPublicScreening,
      circuit,
      film,
      cinemaLabel,
      mainComplex,
      sessionAttributes,
      id,
      movie,
      maxSeats,
      availableSeats,
      popular,
    })
  }

  render() {
    return <h1>{this.movie.title}</h1>
  }
}
