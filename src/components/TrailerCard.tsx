import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { TrailerCardInterface } from '../interfaces/trailerInterface'

export default function TrailerCard({
  link,
  text,
  subText,
  secondary = false,
  lightMode,
}: TrailerCardInterface) {
  return (
    <div
      className={`flex p-3 items-center h-full w-full max-w-sm xl:scale-[240%] ${
        secondary ? 'bg-alpha-x-light dark:bg-alpha-xx-light rounded-xl' : ''
      }`}
    >
      <QRCodeSVG
        value={link}
        fgColor={!lightMode || secondary ? '#FFFFFF' : '#004680'}
        bgColor="transparent"
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
