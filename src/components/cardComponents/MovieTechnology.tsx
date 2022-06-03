import { SessionAttribute } from '../../interfaces/Movies'

export default function MovieTechnology({
  sessionAttributes,
}: {
  sessionAttributes: SessionAttribute[]
}) {
  const baseURL = 'https://cdn.kinepolis.be/images'

  return (
    <div className="flex gap-2 items-center">
      {sessionAttributes?.map((attribute) =>
        attribute.shortName != 'Pauze' && attribute.shortName != 'Familie' ? (
          attribute.shortName == 'LaserUltra' || attribute.shortName == '3D' ? (
            <div key={attribute.id} className="flex items-center">
              <div className="bg-white rounded-full w-6 h-6 mr-2">
                <img
                  src={`${baseURL}${attribute.imageUrl}`}
                  alt={attribute.shortName}
                />
              </div>
              <div className="bg-alpha-xxx-light opacity-40 dark:bg-gray-xx-light dark:opacity-100 w-[2px] rounded-sm h-5"></div>
            </div>
          ) : (
            <div className="bg-white rounded-full w-6 h-6 " key={attribute.id}>
              <img
                src={`${baseURL}${attribute.imageUrl}`}
                alt={attribute.shortName}
              />
            </div>
          )
        ) : (
          ''
        ),
      )}
    </div>
  )
}

// {sessionAttributes?.map((attribute) => {
//   if (attribute.shortName == 'Pauze') {
//     console.log('Pauze')
//     return (
//         <div className="bg-alpha rounded-full w-6 h-6 " key={attribute.id}>
//           <img
//             src={`${baseURL}${attribute.imageUrl}`}
//             alt={attribute.shortName}
//           />
//         </div>
//     )
//   }
//   else {
//     console.log('Geen pauze')
//     return (

//       <div className="bg-white rounded-full w-6 h-6 " key={attribute.id}>
//         <img
//           src={`${baseURL}${attribute.imageUrl}`}
//           alt={attribute.shortName}
//         />
//       </div>

//     )
//   }
// }
// )}

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
