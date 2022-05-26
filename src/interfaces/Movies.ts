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
  code: string
  name: string
  id: string
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

export interface Event2 {
  isActive: boolean
  code: string
  name: string
  id: string
}

export interface Session {
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
  event?: Event2
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

export interface Event3 {
  isActive: boolean
  shortName: string
  description: string
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

export interface Attribute2 {
  isActive: boolean
  imageUrl: string
  code: string
  promoted: boolean
  name: string
  id: string
}

export interface Trailer {
  mediaClass: string
  lastModificationDate: Date
  mediaType: string
  url: string
}

export interface Film2 {
  title: string
  censor: Censor
  releaseDate: Date
  synopsis: string
  spokenLanguage: SpokenLanguage
  subtitles: Subtitles
  duration: number
  countryOfOrigin: CountryOfOrigin
  corporateId: number
  event: Event3
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
  attributes: Attribute2[]
  name: string
  country: string
  language: string
  documentType: string
  id: string
  trailers: Trailer[]
  _circuit: string
}

export interface RootObject {
  films: Film2[]
  sessions: Session[]
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
  event: Event3
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
  attributes: Attribute2[]
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
  lastTickets?: boolean
  popular?: boolean
}
