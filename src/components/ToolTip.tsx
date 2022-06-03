export default function ToolTip({ text }: { text: string }) {
  let splittedText: String[] = []
  splittedText = text.split(',', 2)
  console.log(splittedText)
  return (
    <div className="w-[22%] uppercase font-proxima font-bold flex flex-wrap justify-end py-1.5 ">
      <p className="  text-sm  dark:text-warning text-error text-center">
        {splittedText[0]}
      </p>
      <p className="dark:text-white text-black text-xs">{splittedText[1]}</p>
    </div>
  )
}
