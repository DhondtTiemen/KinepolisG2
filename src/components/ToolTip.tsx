export default function ToolTip({ text }: { text: string }) {
  let splittedText: String[] = []
  splittedText = text.split(',', 2)
  return (
    <div className=" uppercase font-proxima font-bold flex  flex-col items-end justify-end py-1.5 ">
      <p className=" pb-[1px]  dark:text-warning text-error text-center xl:text-[250%]">
        {splittedText[0]}
      </p>
      <p className="dark:text-white text-alpha-x-light text-xs xl:text-[200%] xl:pt-4">
        {splittedText[1]}
      </p>
    </div>
  )
}
