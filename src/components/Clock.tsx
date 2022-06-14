import { useEffect, useState } from 'react'

export default function Clock() {
  const [clockState, setClockState] =
    useState<string>()

  useEffect(() => {
    setInterval(() => {
      const date = new Date().toLocaleTimeString(
        [],
        {
          hour: '2-digit',
          minute: '2-digit',
        },
      )
      setClockState(date)
    }, 1000)
  }, [])

  return (
    <div>
      <time className="text-alpha-x-light flex justify-center dark:text-white font-proxima font-medium text-2xl">
        {clockState}
      </time>
    </div>
  )
}
