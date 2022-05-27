export default function ToolTip({ text }: { text: string }) {
  return (
    <div className="w-36 rounded-2xl py-1.5 px-3.5 bg-alpha-x-light dark:bg-alpha-xx-light">
      <h1 className="font-proxima font-bold uppercase text-sm text-white text-center">
        {text}
      </h1>
      <div className="w-7 overflow-hidden absolute mt-1.45 ml-16">
        <div className=" h-5 w-5 -rotate-45 transform origin-top-left bg-alpha-x-light dark:bg-alpha-xx-light"></div>
      </div>
    </div>
  )
}
