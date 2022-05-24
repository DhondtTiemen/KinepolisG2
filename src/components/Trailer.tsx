import TrailerInterface from '../interfaces/trailerInterface'

export default function Trailer({
  video,
  description,
  children,
}: TrailerInterface) {
  return (
    <footer className="relative h-1/4">
      <iframe
        className="w-full h-full"
        src={video}
        title={description}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="absolute top-0 w-screen h-1/3 bg-gradient-to-b from-gray-x-light via-gray-x-light dark:via-alpha dark:from-alpha to-transparant">
        <div className="flex sm:flex-row flex-col mx-6 gap-4 justify-center items-center">
          {children}
        </div>
      </div>
    </footer>
  )
}
