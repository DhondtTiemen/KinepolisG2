import { startTransition, useEffect, useState } from 'react'
// export const timerPage = (
//   time: number,
// ) => {
//     const [timer, setTimer] = useState(0)

//         timer >= 0 &&
//           setTimeout(
//             () => setTimer(timer + 1),
//             1000,
//           )
// }

export default function PageIndicator({
  page,
  timing,
}: {
  page: number
  timing: number
}) {
  const [timer, setTimer] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [timeOver, setTimeOver] = useState<boolean>(false)
  const [checkTimeOver, setCheckTimeOver] = useState<string>('1000')
  // const checkWidth = (w: number, page2: number) => {
  //   for (let i = 1; i < page + 1; i++) {
  //     if (page2 == i) {
  //       if (w - 80 * (page2 - 1) < 0) {
  //         return 0
  //       }
  //       return w - 80 * (page2 - 1)
  //     }
  //   }
  // }
  const checkBreed = (w: number, page2: number) => {
    for (let i = 1; i < page + 1; i++) {
      if (page2 == i) {
        if (timer - timing * (page2 - 1) < 0) {
          return 0
        }
        // console.log(w)
        return w - 80 * (page2 - 1)
      }
    }
  }

  // const checkTimeOver = () => {
  //   if (timer!=23) {
  //     return 'opacity-1'
  //   } else {
  //     return 'opacity-0'
  //   }
  // }
  const NumberOfPages = () => {
    const code: JSX.Element[] = []
    for (let i = 0; i < page; i++) {
      code.push(
        <div
          key={i}
          className="rounded-full w-20 h-3 bg-gray-xx-light dark:bg-alpha-x"
        >
          {/* <div className={`${checkTimeOver()}`}> */}
          <div
            style={{ width: checkBreed(width, i + 1), maxWidth: 80, transitionTimingFunction:'linear',transitionDuration:`${checkTimeOver}ms` }}
            className={` dark:bg-warning bg-error rounded-full h-3`}
          ></div>
          {/* </div> */}
        </div>,
      )
    }

    return code
  }

  useEffect(() => {
    timer >= 0 && setTimeout(() => setTimer(timer + 1), 1000)
    if (Math.round(width) % 80 != 0 || timer == 0) {
      setWidth((width + 80 / timing))
    }
    if (timer % (timing + 1) == 0) {
      setWidth(width + 80 / timing)
    }

    if (timer == page * timing + page) {
      setTimer(0)
    }
    if (timer == page * timing + page - 1) {
      setCheckTimeOver('0')
      setTimeOver(true)
    }
    if (timer == 0) {
      setWidth(80 / timing)

      setTimeOver(false)
    }
    if (timer == 1) {
      setCheckTimeOver('1000')
    }
  }, [timer])
  return <>{NumberOfPages()}</>
}
