import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { TrailerCardInterface } from '../interfaces/trailerInterface'

export default function TrailerCard({
  link,
  text,
  subText,
  secondary = false,
}: TrailerCardInterface) {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setDarkMode(e.matches))
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {})
    }
  }, [])
  return (
    <div
      className={`flex flex-row p-3 items-center h-full w-full max-w-sm ${
        secondary ? 'bg-alpha-x-light dark:bg-alpha-xx-light rounded-xl' : ''
      }`}
    >
      <QRCodeSVG
        value={link}
        fgColor={darkMode || secondary ? '#FFFFFF' : '#004680'}
        bgColor="rgba(0,0,0,0)"
        width="55"
        height="55"
      />
      <div
        className={`font-proxima text-xl flex flex-col pl-5 ${
          secondary ? 'text-white' : 'text-alpha-x-light dark:text-white'
        }`}
      >
        <p>{text}</p>
        <p className="font-bold">{subText}</p>
      </div>
    </div>
  )
}
