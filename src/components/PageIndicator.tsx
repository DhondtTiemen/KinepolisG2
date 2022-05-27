import { useEffect, useState } from 'react'
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

export default function PageIndicator({ page }: { page: number }) {
  const [timer, setTimer] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [timeOver, setTimeOver] = useState<boolean>(false)
  const checkWidth = (w: number, page2: number) => {
    for (let i = 1; i < page + 1; i++) {
      if (page2 == i) {
        if (w - 80 * (page2 - 1) < 0) {
          return 0
        }
        return w - 80 * (page2 - 1)
      }
    }
  }
  const checkTimeOver = () => {
    if (timeOver == false) {
      return 'opacity-1'
    } else {
      return 'opacity-0'
    }
  }
  const NumberOfPages = () => {
    const code: JSX.Element[] = []
    for (let i = 0; i < page; i++) {
      code.push(
        <div
          key={i}
          className="rounded-full w-20 h-3 bg-gray-xx-light dark:bg-alpha-x"
        >
          <div className={`${checkTimeOver()}`}>
            <div
              style={{ width: checkWidth(width, i + 1), maxWidth: 80 }}
              className={`bg-warning rounded-full h-3 ease-linear duration-1000`}
            ></div>
          </div>
        </div>,
      )
    }

    return code
  }

  useEffect(() => {
    timer >= 0 && setTimeout(() => setTimer(timer + 1), 1000)
    // console.log(timer)
    setWidth(width + 8)
    if (timer > page * 10) {
      setTimeOver(true)
      setTimer(0)
      setWidth(0)
    }
    if (timer == 1) {
      setTimeOver(false)
    }
  }, [timer])
  return <>{NumberOfPages()}</>
}
