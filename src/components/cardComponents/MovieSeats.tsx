export default function MovieSeats({
  lastTickets,
  availableSeats,
}: {
  lastTickets: boolean
  availableSeats: number
}) {
  // TODO: Beschikbare stoelen en icoontje wat kleiner? -> wat denken jullie?

  return (
    <div className="flex items-center h-6 font-proxima mt-[2px]">
      <p
        className={`text-[20px] font-bold ${
          lastTickets == true
            ? 'dark:text-warning text-error'
            : 'dark:text-good text-[#05b300]'
        }`}
      >
        {availableSeats}
      </p>
      <div className="w-[18px] ml-2 ">
        <svg viewBox="0 0 1024 1024">
          <path
            className="dark:stroke-gray stroke-alpha-xxx-light stroke-[26px] fill-alpha-xxx-light dark:fill-gray"
            d="M192 362.666667V170.730667A64.042667 64.042667 0 0 1 255.808 106.666667H768.213333A63.893333 63.893333 0 0 1 832 170.730667V362.666667h42.709333A64.042667 64.042667 0 0 1 938.666667 426.56v362.88A64.042667 64.042667 0 0 1 874.602667 853.333333H149.397333A64.106667 64.106667 0 0 1 85.333333 789.44v-362.88A63.808 63.808 0 0 1 149.290667 362.666667H192z m597.333333 0V170.730667A21.226667 21.226667 0 0 0 768.192 149.333333H255.786667C244.266667 149.333333 234.666667 158.954667 234.666667 170.730667V362.666667h0.042666A64.106667 64.106667 0 0 1 298.666667 426.858667v170.282666c0 11.946667 9.493333 21.525333 21.141333 21.525334H704.213333c11.605333 0 21.141333-9.621333 21.141334-21.525334V426.88A63.957333 63.957333 0 0 1 789.290667 362.666667H789.333333zM128 426.56v362.88c0 11.584 9.642667 21.226667 21.397333 21.226667h725.205334c11.776 0 21.397333-9.557333 21.397333-21.226667v-362.88c0-11.605333-9.6-21.226667-21.290667-21.226667h-85.418666A21.290667 21.290667 0 0 0 768 426.858667v170.282666A64.042667 64.042667 0 0 1 704.192 661.333333H319.786667A63.978667 63.978667 0 0 1 256 597.141333V426.88c0-11.882667-9.6-21.525333-21.290667-21.525333H149.290667a21.141333 21.141333 0 0 0-21.290667 21.226666zM256 853.333333h42.666667v85.333334h-42.666667v-85.333334z m469.333333 0h42.666667v85.333334h-42.666667v-85.333334z"
          />
        </svg>
      </div>
    </div>
  )
}
