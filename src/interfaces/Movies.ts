export interface Attribute {
  attributeHOPK: string
  imageUrl: string
  salesChannels: any[]
  shortName: string
}

export interface Format {
  attributes: Attribute[]
  name: string
  id: string
}

export interface Event {
  isActive: boolean
  code?: string
  name?: string
  id?: string
}

export interface Film {
  format: Format
  corporateId: number
  id: string
  event: Event
}

export interface SessionAttribute {
  isActive: boolean
  imageUrl: string
  code: string
  shortName: string
  promoted: boolean
  name: string
  id: string
}

export interface Censor {
  isActive: boolean
  iconUrl: string
  minimumAge: number
  name: string
  id: string
}

export interface SpokenLanguage {
  code: string
  name: string
  id: string
}

export interface Subtitles {
  code: string
  name: string
  id: string
}

export interface CountryOfOrigin {
  code: string
  name: string
  id: string
}

export interface Image {
  mediaClass: string
  lastModificationDate: Date
  mediaType: string
  url: string
}

export interface FilmPerson {
  firstName: string
  lastName: string
  role: string
  selligentId: string
  id: string
}

export interface Genre {
  selligentId: string
  shortName: string
  id: number
  name: string
}

export interface Trailer {
  mediaClass: string
  lastModificationDate: Date
  mediaType: string
  url: string
}

export interface IMovie {
  title: string
  censor: Censor
  releaseDate: Date
  synopsis: string
  spokenLanguage: SpokenLanguage
  subtitles: Subtitles
  duration: number
  countryOfOrigin: CountryOfOrigin
  corporateId: number
  event: Event
  imdbCode: string
  releaseType: string
  audioLanguage: string
  originalAudioLanguage: string
  shortSynopsis: string
  sortingNumber: number
  distributorName: string
  showAsFutureRelease: boolean
  images: Image[]
  filmPersons: FilmPerson[]
  genres: Genre[]
  attributes: Attribute[]
  name: string
  country: string
  language: string
  documentType: string
  id: string
  trailers: Trailer[]
  _circuit: string
}

export interface ISession {
  complexOperator: string
  documentType: string
  country: string
  language: string
  showtime: Date
  businessDay: Date
  hall: number
  vistaSessionId: number
  hasSeatingPlan: boolean
  hasSpecialSeating: boolean
  hasCosySeating: boolean
  isSoldOut: boolean
  isSneakPreview: boolean
  isPublicScreening: boolean
  circuit: string
  film: Film
  cinemaLabel: string
  mainComplex: string
  sessionAttributes: SessionAttribute[]
  id: string
  movie?: IMovie
  maxSeats?: number
  availableSeats?: number
  popular?: boolean
  lastTickets?: boolean
}
