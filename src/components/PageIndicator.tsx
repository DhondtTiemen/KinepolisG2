import {  useEffect, useState } from 'react'

export default function PageIndicator({
  page,
  timing,
}: {
  page: number
  timing: number
}) {
  const [timer, setTimer] = useState<number>(-1)
  const [width, setWidth] = useState<number>(0)
  const [checkTimeOver, setCheckTimeOver] = useState<string>('1000')
  const checkBreed = (w: number, page2: number) => {
    for (let i = 1; i < page + 1; i++) {
      if (page2 == i) {
        if (timer - timing * (page2 - 1) < 0) {
          return 0
        }
        return w - 80 * (page2 - 1)
      }
    }
  }

  const NumberOfPages = () => {
    const code: JSX.Element[] = []
    if (page >1){
      for (let i = 0; i < page; i++) {
        code.push(
          <div
            key={i}
            className="rounded-full w-20 h-3 bg-gray-xx-light dark:bg-alpha-x"
          >
            <div
              style={{
                width: checkBreed(width, i + 1),
                maxWidth: 80,
                transitionTimingFunction: 'linear',
                transitionDuration: `${checkTimeOver}ms`,
              }}
              className={` dark:bg-warning bg-error rounded-full h-3`}
            ></div>
          </div>,
        )
      }
    }

    return code
  }

  useEffect(() => {
    timer >= -1 && setTimeout(() => setTimer(timer + 1), 1000)
    if (Math.round(width) % 80 != 0 || timer == 0) {
      setWidth((width + 80 / timing))
    }
    if (timer % (timing + 1) == 0) {
      setWidth(width + 80 / timing)
    }

    if (timer % (timing + 1) == 0 && timer != 0) {
      setWidth(width + 80 / timing)
    }

    if (timer == timing*page+1 ){
      setCheckTimeOver('0')
      setTimer(-1)
      setWidth(-(80 / timing))
    }
    if(timer == 0){
      setCheckTimeOver('1000')
    }
    

  }, [timer])
  return <>{NumberOfPages()}</>
}
