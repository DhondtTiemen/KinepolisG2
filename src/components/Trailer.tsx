import { TrailerInterface } from '../interfaces/trailerInterface'

export default function Trailer({
  video,
  description,
  children,
}: TrailerInterface) {
  return (
    <footer className="h-1/3">
      <div className="relative h-full w-screen ">
        <div className="absolute w-screen h-1/3 bg-gradient-to-b -top-1 from-gray-x-light via-gray-x-light dark:via-alpha dark:from-alpha to-transparant">
          <div className="flex sm:flex-row flex-col mx-6 gap-4 justify-center items-center xl:justify-evenly xl:gap-48">
            {children}
          </div>
        </div>
        <iframe
          className="w-full h-full"
          src={video}
          title={description}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </footer>
  )
}
