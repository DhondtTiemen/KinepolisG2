import { Format, SessionAttribute } from '../../interfaces/Movies'

export default function MovieTechnology({
  format,
  sessionAttributes,
}: {
  format: Format
  sessionAttributes: SessionAttribute[]
}) {
  const baseURL = 'https://cdn.kinepolis.be/images'

  if (sessionAttributes == undefined) {
    return <div className="h-6 w-6"></div>
  } else {
    return (
      <div className="flex gap-2 items-center">
        {format.name == '4DX 3D'
          ? sessionAttributes?.map((attribute) =>
              attribute.shortName != 'Pauze' &&
              attribute.shortName != 'Familie' &&
              attribute.shortName != 'Franse F' ? (
                attribute.shortName == 'LaserUltra' ||
                attribute.shortName == '3D' ||
                attribute.shortName == '4DX' ||
                attribute.shortName == 'IMAX3D' ? (
                  attribute.shortName == '3D' || attribute.shortName == 'LaserUltra' ? (
                    <div key={attribute.id} className="flex items-center">
                      <div className="bg-white rounded-full w-6 h-6">
                        <img 
                          src={`${baseURL}${attribute.imageUrl}`}
                          alt={attribute.shortName} 
                        />
                      </div>
                    </div>
                  ) : (
                    <div key={attribute.id} className="flex items-center">
                      <div className="bg-white rounded-full w-6 h-6 mr-2">
                        <img
                          src={`${baseURL}${attribute.imageUrl}`}
                          alt={attribute.shortName}
                        />
                      </div>
                      <div className="bg-alpha-xxx-light opacity-40 dark:bg-gray-xx-light dark:opacity-100 w-[2px] rounded-sm h-5"></div>
                    </div>
                  )
                ) : (
                  <div
                    className="bg-white rounded-full w-6 h-6 "
                    key={attribute.id}
                  >
                    <img
                      src={`${baseURL}${attribute.imageUrl}`}
                      alt={attribute.shortName}
                    />
                  </div>
                )
              ) : (
                ''
              ),
            )
          : sessionAttributes?.map((attribute) =>
              attribute.shortName != 'Pauze' &&
              attribute.shortName != 'Familie' &&
              attribute.shortName != 'Franse F' ? (
                attribute.shortName == 'LaserUltra' ||
                attribute.shortName == '3D' ||
                attribute.shortName == '4DX' ||
                attribute.shortName == 'IMAX3D' ? (
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
                  <div
                    className="bg-white rounded-full w-6 h-6 "
                    key={attribute.id}
                  >
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
}