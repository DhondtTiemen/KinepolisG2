import { SessionAttribute } from "../../interfaces/Movies"

export default ({sessionAttributes}: {sessionAttributes: SessionAttribute[]}) => {
  const baseURL = 'https://cdn.kinepolis.be/images'

  return (
    <>
      {
        sessionAttributes?.map((attribute) => (
          <div>
            <img src={`${baseURL}${attribute.imageUrl}`} alt={attribute.shortName}/>
          </div>
        ))
      }
      <div className="flex items-center">
        <div className="bg-white rounded-full w-4 h-4 mr-2">
          <img src="" alt="" />
        </div>
        <div className="bg-alpha-xxx-light opacity-40 dark:bg-gray-xx-light dark:opacity-100 w-[2px] rounded-sm h-4 mr-2"></div>
        <div className="bg-white rounded-full w-4 h-4 mr-1">
          <img src="" alt="" />
        </div>
        <div className="bg-white rounded-full w-4 h-4 ">
         <img src="" alt="" />
        </div>
     </div>
    </>
  )
}

    // {
    //   sessionAttributes.map((session) => (
    //   <div>
    //     {session.imageUrl}
    //   </div>
    // }
    // <div className="flex items-center">
    //   <div className="bg-white rounded-full w-4 h-4 mr-2">
    //     <img src="" alt="" />
    //   </div>
    //   <div className="bg-alpha-xxx-light opacity-40 dark:bg-gray-xx-light dark:opacity-100 w-[2px] rounded-sm h-4 mr-2"></div>
    //   <div className="bg-white rounded-full w-4 h-4 mr-1">
    //     <img src="" alt="" />
    //   </div>
    //   <div className="bg-white rounded-full w-4 h-4 ">
    //     <img src="" alt="" />
    //   </div>
    // </div>