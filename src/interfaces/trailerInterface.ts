export interface TrailerInterface {
  video: string
  description?: string
  children?: JSX.Element | JSX.Element[]
}

export interface TrailerCardInterface {
  link: string
  text?: string
  subText?: string
  secondary?: boolean
  lightMode?: boolean
}
