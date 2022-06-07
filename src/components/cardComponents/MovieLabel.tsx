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
      <div className="flex justify-end mr-4 -mb-2">
        <div
          className={`w-[90%] h-[22px] ${
            type == 'popular'
              ? 'dark:bg-alpha-xx-light bg-alpha-x-light'
              : 'dark:bg-warning bg-error'
          } rounded-b-md `}
        >
          <p className="text-center text-white font-proxima text-xs font-semibold mt-[2px]">
            {text}
          </p>
        </div>
      </div>
    )
  }
}
