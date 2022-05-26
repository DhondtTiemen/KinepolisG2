import { Image } from '../../interfaces/Movies'

export default ({ images }: { images: Image[] }) => {
  const baseURL = 'https://cdn.kinepolis.be/images/'

  return (
    <>
      {images?.map((cover) =>
        cover.mediaType == 'Poster Graphic' ? (
          <div className="">
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

// <div className=" mr-4">
//   <img
//     className="rounded-md w-4/5 ml-4 mt-4 relative z-10 "
//     src="https://images.unsplash.com/photo-1512070679279-8988d32161be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738"
//     alt=""
//   />
//   <img
//     className="rounded-md  relative -top-28 blur-md "
//     src="https://images.unsplash.com/photo-1512070679279-8988d32161be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738"
//     alt=""
//   />
// </div>
