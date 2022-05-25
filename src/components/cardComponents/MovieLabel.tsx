export default ({ text, type }: { text: string; type: string }) => {
  return (
    <div className="flex  justify-end mr-4">
      <div className={`w-20 h-[22px] ${type == 'popular' ? 'bg-alpha-xx-light' : 'bg-warning'} rounded-b-md `}>
        <p className="text-center text-white font-proxima text-xs font-bold mt-[1px]">
          {text}
        </p>
      </div>
    </div>
  )
}
