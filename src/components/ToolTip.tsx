export default function ToolTip({ text }: { text: string }) {
  let splittedText: String[] = []
  splittedText = text.split(',', 2)
  return (
    <div className=" uppercase font-proxima font-bold flex  flex-col items-end justify-end py-1.5 ">
      <p className=" text-sm  dark:text-warning text-error text-center">
        {splittedText[0]}
      </p>
      <p className="dark:text-white text-alpha-x-light text-xs">
        {splittedText[1]}
      </p>
    </div>
  )
}
