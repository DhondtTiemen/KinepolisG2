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
    return
  } else {
    return (
      <div className="flex justify-end mr-4 -mb-2">
        <div
          className={`w-[90%] h-[22px] ${
            type == 'popular' ? 'bg-alpha-xx-light' : 'bg-warning'
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
