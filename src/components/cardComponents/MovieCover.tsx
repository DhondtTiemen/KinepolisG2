import { Image } from '../../interfaces/Movies'

export default function MovieCover({ images }: { images: Image[] }) {
  const baseURL = 'https://cdn.kinepolis.be/images/'
  return (
    <>
      {images?.map((cover) =>
        cover.mediaType == 'Poster Graphic' ? (
          <div key={cover.url}>
            <img
              className="rounded-md w-[70px] h-[100px] ml-4 mt-4 relative z-10"
              src={`${baseURL}${cover.url}`}
              alt={cover.mediaType}
            />
            <img
              className="rounded-md h-[150px] relative -top-[140px] blur-[8px] opacity-30"
              src={`${baseURL}${cover.url}`}
              alt={cover.mediaType}
            />
          </div>
        ) : (
          ''
        ),
      )}
    </>
  )
}
