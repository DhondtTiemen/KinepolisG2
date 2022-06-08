export default function MovieLabel({
  text,
  type,
  visible,
}: {
  text: string
  type: string
  visible: boolean
}) {
  if (visible == false) {
    return <div></div>
  } else {
    return (
      <div className="flex justify-end mr-4 -mb-2 ">
        <div
          className={`h-[19px] ${
            type == 'popular'
              ? 'dark:bg-alpha-xx-light bg-alpha-x-light'
              : 'dark:bg-warning bg-error  w-[95px]'
          } rounded-b-md `}
        >
          <p className="text-center text-white uppercase px-2 font-proxima text-xs font-semibold mt-[0.5px] ">
            {text}
          </p>
        </div>
      </div>
    )
  }
}
